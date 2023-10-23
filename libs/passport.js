const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// call model
const { admins } = require('../models');

const authenticate = (user_name, password, done) => {
    admins.findOne({ where: { user_name: user_name} }).then(userData => {
        if (!userData) {
            return done(null, false, { message: 'User tidak terdaftar!' });
        }

        bcrypt.compare(password, userData.password).then(isMatch => {
            if (!isMatch) {
                return done(null, false, { message: 'Email dan password tidak sesuai!' });
            }

            return done(null, userData);
        });
    });
};

passport.use(new LocalStrategy({
    usernameField: 'user_name',
    passwordField: 'password'
}, authenticate));

passport.serializeUser((admins, done) => {
    done(null, admins.id);
});

passport.deserializeUser((id, done) => {
    admins.findByPk(id).then(admins => {
        done(null, admins);
    });
});

module.exports = passport;