const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const Admin = mongoose.model("admins"); //change this to Admin or User
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        Admin.findById(jwt_payload.id) //change to Admin or User
            .then(admin => { //change to admin or user
                if (admin){ //change to admin or user
                    return done(null, admin); //change to admin or user
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};