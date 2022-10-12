"use strict";

const express =require("express");
const router =express.Router();
const ctrl =require("./home.ctrl")
// home화면입니다
router.get("/",ctrl.output.home);
// login 화면입니다
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);
// register 화면입니다
router.get("/register", ctrl.output.register);
router.post("/register", ctrl.process.register);



module.exports = router;
