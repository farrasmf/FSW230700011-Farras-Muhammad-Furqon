const { admins } = require("../models");
const bcrypt = require("bcrypt");

class AdminService {
    constructor() {
        this.adminModel = admins
    }
    async store(payload) {
        const date = new Date();
        const { full_name, user_name, password, role } = payload;
        const exsistingUserName = await this.findByUserName(user_name);
       
        // if (password !== repassword) {
        //     throw new Error ("Password tidak sama")
        // }
        
        if (exsistingUserName) {
            throw new Error ("Email sudah terdaftar");
        }
       
        const encript = await bcrypt.hash(password, 10);
        
        // Simpan data pengguna ke data base
        const data = await this.adminModel.create({
            full_name,
            user_name,
            password: encript,
            role,
            createdAt: date,
            updatedAt: date
        });
        return data;
    }

    async findByUserName(user_name) {
        const data = await this.adminModel.findOne({where: {user_name}});
        return data;
      }
}


module.exports = AdminService;