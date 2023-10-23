const express = require("express");
const router = require("./routers/router");
const morgan = require('morgan');
const path = require("path");
const app = express();
const port = 3000;
const ejsLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require("./libs/passport");



app.use(morgan('dev'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(ejsLayouts)

app.set('layout', 'layouts/layout')

app.use(express.static(path.join(__dirname, 'public')))

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
// proses inisasi middleware auth
app.use(cookieParser());
app.use(flash());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// end proses inisiasi middleware.

app.use(router);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
})