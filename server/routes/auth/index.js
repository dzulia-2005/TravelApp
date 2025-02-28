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


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User authentication
 *     description: Logs the user into the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "test@example.com"
 *               password:
 *                 type: string
 *                 example: "password1234"
 *     responses:
 *       200:
 *         description: Successful authentication
 *       400:
 *         description: Invalid credentials
 */


//login
router.post("/login",loginController);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User authentication
 *     description: Register the user into the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                  type: string
 *                  example: "gamer123"
 *               email:
 *                 type: string
 *                 example: "test@example.com"
 *               password:
 *                 type: string
 *                 example: "password1234"
 * 
 *     responses:
 *       201:
 *         description: Successful authentication
 *       400:
 *         description: Invalid credentials
 */

//register
router.post("/register",registerController);


/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: User Log out
 *     description: Log out user from interface
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: refresh token required
 *       400:
 *         description: invalid refreshTOken
 */

//logout
router.post("/logout",logOutController);




/**
 * @swagger
 * /api/auth/refresh:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Refresh access token
 *     description: Generate new access token using refresh token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: "your-refresh-token-here"
 *     responses:
 *       200:
 *         description: New access token generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: "new-access-token-here"
 *       401:
 *         description: Refresh token required
 *       403:
 *         description: Invalid refresh token
 */

//refreshToken
router.post("/refresh",refreshTokenController);


/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Get authenticated user info
 *     description: Returns the currently authenticated user
 *     security: 
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *         content: 
 *           application/json: 
 *             schema: 
 *               type: object
 *               properties: 
 *                 id: 
 *                   type: string
 *                   example: "1234"
 *                 username:
 *                   type: string
 *                   example: "gamer123"
 *                 email: 
 *                   type: string
 *                   example: "test@example.com"
 *       401:
 *         description: Unauthorized
 */

//me
router.get("/me",authMiddleware,meController)


module.exports = router;