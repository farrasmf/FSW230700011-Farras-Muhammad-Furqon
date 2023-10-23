const passport = require("passport");
module.exports = {
    indexLogin: (req, res) => {
        res.render('pages/login', { layout: "layouts/layout"})
    },
    
    login: passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true
    }),
    
    logout: (req, res, next) => {
        req.logout((err) => {
            if (err) { return next(err); }
            res.redirect('/login');
        })
    }
}