const adminServices = require("../services/admin-services")

const AdminServces = new adminServices();

const AdminAuth = async (req,res) =>{
  try {
    console.log(req.body.email , req.body.password);
    const response = await AdminServces.AdminServices(req.body.email , req.body.password);
    return res.status(201).json({
      data : response,
      success : true,
      message : "Authenticate"
    })
  } catch (error) {
      return res.status(500).json({
        data : "",
        success : false,
        message : "fail to authenticate"
      })
  }
}

module.exports = {
  AdminAuth,
}