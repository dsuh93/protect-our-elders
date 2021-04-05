const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../../models/Admin');
const keys = require('../../config/keys');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const validateLoginInput = require('../../validation/login');


router.post('/register', (req, res) => {
    // Check to make sure nobody has already registered with a duplicate email
     
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
     
    Admin.findOne({ username: req.body.username })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({username: "A user has already registered with this name"})
        } else {
          // Otherwise create a new user
          const newUser = new Admin({
            username: req.body.username,
            password: req.body.password
          })
           
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user =>{ 
                    const payload = {
                        id: user.id,
                        username: user.username
                    }
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 3600},
                        (err, token) => {
                             
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            })
                        }
                    )
                })
                .catch(err => console.log(err));
            })
          })
        }
      })
  })

router.post('/login', (req, res) => {
    const{ errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password)

    Admin.findOne({ username })
        .then(user => {
            if(!user) {
                return res.status(404).json({username: "This user does not exit"});
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            username: user.username
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                })
                            }
                        )
                    }else{
                        return res.status(400).json( {password: "Incorrect Passowrd"} );
                    }
                })
        })
})

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username 
    });
})

module.exports = router;