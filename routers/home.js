const express = require("express");
const HomeController = require("../controllers/home.controller");
const home = express.Router();

const homeController = new HomeController;
home.get("/", homeController.index);

module.exports = home;