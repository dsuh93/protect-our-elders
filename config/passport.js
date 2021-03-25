const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const Elder = mongoose.model("Elder");
const keys = require("../config/keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        Elder.findById(jwt_payload.id)
            .then(elder => {
                if (elder){
                    return done(null, elder);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};