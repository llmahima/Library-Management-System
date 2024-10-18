const {admin} = require("../models/index");

class AdminRepository {
  
  async Authenticate(userEmail , userPassword) {
    try {
      const response = await admin.findAll({
        where : {
          email : userEmail,
          password : userPassword,
        }
      })
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AdminRepository;
