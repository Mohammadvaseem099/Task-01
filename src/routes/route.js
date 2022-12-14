// router.all("/*", function (req, res) {
//     res.status(400).send({status: false, message: "Make Sure Your Endpoint is Correct !!!"
//     })
const express = require('express');
const router = express.Router();
const {createUser,userLogin} = require("../controller/userController");
const {createStudent, getStudent, updateStudent, deleteStudent} = require("../controller/studentController");
const { Authentication,Authorization} = require("../middleware/auth")


router.post("/createUser", createUser);
router.post("/userLogin", userLogin);

router.post("/createStudent",Authentication,createStudent);
router.get("/getStudent/:userId",Authentication,Authorization,getStudent);
router.put("/updateStudent/:userId",Authentication,Authorization,updateStudent);
router.delete("/deleteStudent/:userId",Authentication,Authorization,deleteStudent);


router.all("/**",  (req, res) => {
    return res.status(404).send({ status: false, msg: "This API you request is not Available!" })
});


module.exports = router