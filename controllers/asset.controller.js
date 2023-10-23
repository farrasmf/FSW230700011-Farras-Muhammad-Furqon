const AssetService = require("../services/assets.service");

const assetService = new AssetService

class AssetController {
    async getAsset(req, res) {
        try {
            const asset = await assetService.getAsset();
            res.status(200).json({ message: "Succes", data: asset});
        } catch (error) {
            res.status(500).json({ message: "Failed" });
            console.error(error);
        }
    }

    async storeAsset(req, res) {
        try {
            const payload = req.body;
            const asset = await assetService.storeAsset(payload);
            res.status(200).json({ message: "Succes", data: asset});
        } catch (error) {
            res.status(500).json({ message: "Failed" });
            console.error(error);
        }
    }

    async deleteAsset(req, res) {
        try {
            const id = req.params.id;
            const asset = await assetService.deleteAsset(id);
            res.status(200).json({ message: "Succes", data: asset});
        } catch (error) {
            res.status(500).json({ message: "Failed" });
            console.error(error);
        }
    }
    
    async updateAsset(req, res) {
        try {
            const payload = req.body;
            const id = req.params.id;
            const asset = await assetService.updateAsset(payload, id);
            res.status(200).json({ message: "Succes", data: asset});
        } catch (error) {
            res.status(500).json({ message: "Failed" });
            console.error(error);
        }
    }
}

module.exports = AssetController;