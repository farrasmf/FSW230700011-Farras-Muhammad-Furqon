const AdminService = require("../services/admins.service");
const adminService = new AdminService();

class AdminController {
    async register(req, res) {
        try {
            await adminService.store(req.body);
            //Tampilkan pesan sukses
            res.status(201).json({ message: 'Registrasi berhasil'});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Gagal mendaftar'})
        }
    }
}



module.exports = AdminController;

// async indexRegistration(req, res) {
//     res.render("popups/registration", { layout: "layouts/layout"});
// }

// async indexLogin(req, res) {
//     res.render("popups/login", { layout: "layouts/layout"});
// }