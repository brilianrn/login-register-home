const route = require("express").Router();
const UserController = require("../controllers/user.controller");

route.get("/detail/:id", UserController.userDetail);

route.post("/customer/register", UserController.customerRegister);
route.post("/customer/login", UserController.customerLogin);

route.post("/admin/login", UserController.adminLogin);
route.get("/admin/list-customers", UserController.listCustomers);
route.post("/admin/approve-customer", UserController.approveCustomer);

module.exports = route;