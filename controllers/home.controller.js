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
        const assets = await assetService.getAsset();
        res.render("pages/dashboard", {assets} );
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
        const id = req.params.id; 
        const assets = await assetService.getOneAsset(id);
        res.render("pages/detailAsset", { layout: "layouts/layout", assets });
    }


}

module.exports = HomeController;