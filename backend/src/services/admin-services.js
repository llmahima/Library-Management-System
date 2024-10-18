const AdminRepository = require("../repository/admin-repo");


class AdminServices {
 constructor(){
  this.adminRepository = new AdminRepository(); 
 }


  async AdminServices(email , pass){
    try {
      const adminAuth = await this.adminRepository.Authenticate(email, pass);
      return adminAuth;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = AdminServices;