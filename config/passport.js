const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const Elder = mongoose.model("Elder"); //change this to Admin or User
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        Elder.findById(jwt_payload.id) //change to Admin or User
            .then(elder => { //change to admin or user
                if (elder){ //change to admin or user
                    return done(null, elder); //change to admin or user
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};