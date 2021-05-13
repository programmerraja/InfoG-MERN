//nodemodules
const express=require("express");
const userController=require("../controllers/user")
//middleware
const authHandler=require("../middleware/authHandler");
const asyncHandler=require("../middleware/asyncHandler");

const router= express.Router();

//routes start with /user

router.post("/logout",authHandler,userController.logout);

router.get("/profile",authHandler,userController.getProfile);

router.post("/profile",authHandler,asyncHandler(userController.postUserProfile));

router.post("/verifiy/email/",asyncHandler(userController.emailVerified));

router.post("/scammer/id/",authHandler,asyncHandler(userController.getScammer));

router.post("/forget/password/",asyncHandler(userController.postForgetPassword));


module.exports=router;