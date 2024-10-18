const express = require("express"); // Correctly requiring express
const AdminController = require("../controllers/admin-controller"); // Correctly requiring the AdminController
const route = express.Router(); // Using express.Router()

// Defining the POST route for authentication
route.post("/auth", AdminController.AdminAuth);

module.exports = route;
