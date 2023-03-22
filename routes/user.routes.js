const { Router } = require("express");
const route = Router();
const user = require("../controllers/user.controllers");

route.post("/user", user.register);
route.post("/login", user.login);
route.post("/userall", user.getAll);

module.exports = route;
