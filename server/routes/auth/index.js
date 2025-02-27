const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/authmiddleware");
const{
    registerController,
    loginController,
    logOutController,
    refreshTokenController,
    meController
} = require("../../controllers/auth/index");

//login
router.post("/login",loginController);

//register
router.post("/register",registerController);

//logout
router.post("/logout",logOutController);

//refreshToken
router.post("/refresh",refreshTokenController);

//me
router.get("/me",authMiddleware,meController)


module.exports = router;