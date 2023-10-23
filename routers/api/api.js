const express = require("express");
const api = express.Router();

const AdminController = require("../../controllers/admin.controller");
const AssetController = require("../../controllers/asset.controller");
const HomeController = require("../../controllers/home.controller");

const adminController = new AdminController;
const assetController = new AssetController;
const homeController = new HomeController;

//Endpoint Admin
api.post('/v1/admins/registration', adminController.register);

//Endpoint Asset
api.get('/v1/assets/', assetController.getAsset);
api.post('/v1/assets/', assetController.storeAsset);
api.delete('/v1/assets/:id', assetController.deleteAsset);
api.put('/v1/assets/:id', assetController.updateAsset);
api.get('/v1/detailAsset/:id', homeController.indexDetailAsset);

module.exports = api;