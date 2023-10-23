const express = require("express");
const HomeController = require("../../controllers/home.controller");
// const AdminController = require("../../controllers/admin.controller");
const homeRouter = express.Router();

const homeController = new HomeController;

homeRouter.get("/", homeController.indexHome);
homeRouter.get("/about", homeController.indexAbout);
homeRouter.get("/dashboard", homeController.indexDashboard);
homeRouter.get("/database", homeController.indexDatabase);
homeRouter.get("/registration", homeController.indexRegistration);
homeRouter.get("/assetDetail/:id", homeController.indexDetailAsset);
homeRouter.get("/editAsset/:id", homeController.indexEditAsset);

module.exports = homeRouter;