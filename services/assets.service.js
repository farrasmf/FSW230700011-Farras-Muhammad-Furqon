const { assets } = require("../models");

class AssetService {
    constructor() {
        this.assetModel = assets
    }
    async getAsset() {
        try {
            const data = await this.assetModel.findAll();
            return data; 
        } catch (error) {
            console.log(error);
        }
    }

    async getOneAsset(id) {
        const data = await this.assetModel.findOne({where: id});
        return data;
    }

    async storeAsset(payload) {
        const date = new Date();
        try {
            const { admin_id, name, type, address, description, photos, coordinate, is_active } = payload;
            // Simpan data asset ke database
            const data = await this.assetModel.create({
                admin_id,
                name,
                type,
                address,
                description,
                photos,
                coordinate,
                is_active,
                createdAt: date,
                updatedAt: date
            });
            return data;
        } catch (error) {
            console.log(error);
        }
        }
    

    async deleteAsset(id) {
        // Delete data asset dari database
        const data = await this.assetModel.destroy({
            where: {
                id: id
            }
        })
        return data;
    }

    async updateAsset(payload, id) {
        const date = new Date();
        try {
            const { admin_id, name, type, address, description, photos, coordinate, is_active } = payload;
            //Update asset di database
            const data = await this.assetModel.update({
                admin_id,
                name,
                type,
                address,
                description,
                photos,
                coordinate,
                is_active,
                createdAt: date,
                updatedAt: date
            }, {
                where: {
                    id:id
                }
            });
            return data
        } catch (error) {
            console.log(error);
        }
    }

    async getCoordinate() {
        try {
            let coordinate = []
            const data = await this.getAsset();
            data.forEach(coord => {
                console.log(coord);
                const latlng = coord.coordinate.split(',');
                coordinate.push({lat : + latlng[0], lng : + latlng[1]})
            });
            console.log(coordinate);
            return coordinate;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AssetService;