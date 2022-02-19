const route = require("express").Router();
const UserController = require("../controllers/user.controller");

route.post("/customer/register", UserController.customerRegister);
route.post("/customer/login", UserController.customerLogin);

route.post("/admin/login", UserController.adminLogin);
route.get("/admin/list-customers", UserController.listCustomers);

module.exports = route;