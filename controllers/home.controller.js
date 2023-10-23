const AssetService = require("../services/assets.service");

const assetService = new AssetService();
class HomeController {
    async indexHome(req, res) {
        res.render("pages/home", { layout: "layouts/layout" });
    }

    async indexAbout(req, res) {
        res.render("pages/about", { layout: "layouts/layout" });
    }

    async indexDashboard(req, res) {
        const coordinates = await assetService.getCoordinate();
        res.render("pages/dashboard", { coordinates });
    }

    async indexDatabase(req, res) {
        const assets = await assetService.getAsset();
        res.render("pages/database", { layout: "layouts/layout", assets });
    }

    async indexRegistration(req, res) {
        res.render("pages/registration", { layout: "layouts/layout" });
    }

    async indexEditAsset(req, res) {
        const assets = await assetService.getAsset();
        res.render("pages/editAsset", { layout: "layouts/layout", assets });
    }

    async indexDetailAsset(req, res) {
        res.render("pages/detailAsset", { layout: "layouts/layout" });
    }
}

module.exports = HomeController;