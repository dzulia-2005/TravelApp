const express = require("express");
const {
    createController,
    deleteCountryController,
    editCountryController,
    likeCountryController,
    unlikeController,
    getAllCountryController,
    getOneCardCountry
} = require("../../controllers/countries/index");
const router = express.Router();



/**
 * @swagger
 * /api/createcountry/{userId}:
 *   post:
 *     summary: Create a new country post
 *     tags: 
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user creating the post
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               caption:
 *                 type: string
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Post created successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

//create country travel
router.post("/createcountry/:userId",createController);

/**
 * @swagger
 * /api/deletecountry/{postId}:
 *  delete:
 *     summary: Delete country Card
 *     tags: 
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: he ID of the post to delete
 *     responses:
 *       201:
 *         description: Post delete successfully
 *       404:
 *         description: post or user not found
 *       500:
 *         description: Server error
 */

//delete country travel
router.delete("/deletecountry/:postId",deleteCountryController);


/**
 * @swagger
 * /api/update/{postId}:
 *   put:
 *     summary: update post
 *     tags:
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user updating the post
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               caption:
 *                 type: string
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Post updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

//edit country travel
router.put("/update/:postId",editCountryController);

/**
 * @swagger
 * /api/like/{postId}: 
 *   post:
 *     summary: like a Country Card
 *     tags: 
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *              userId: 
 *                  type: string
 *                  description: the ID of the user liking country card
 *     responses:
 *       200:
 *         description: Post liked successfully
 *       404:
 *         description: Post not found
 *       500:
 *         description: Server error
 */

//like country tour
router.post("/like/:postId",likeCountryController);


/**
 * @swagger
 * /api/unlike/{postId}: 
 *   post:
 *     summary: Unlike a Country Card
 *     tags: 
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the card to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              userId: 
 *                  type: string
 *                  description: the ID of the user unliking country card
 *     responses:
 *       200:
 *         description: Card Unliked successfully
 *       404:
 *         description: card not found
 *       500:
 *         description: Server error
 */

//unlike country tour
router.post("/unlike/:postId",unlikeController);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Retrieve all country cards
 *     tags: 
 *       - Countries
 *     responses:
 *       200:
 *         description: Successfully retrieved all country cards
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 posts:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Server error
 */

// Get all country cards
router.get("/countries", getAllCountryController);

/**
 * @swagger
 * /api/country/{userId}:
 *   get:
 *     summary: Retrieve a single country card by ID
 *     tags: 
 *       - Countries
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the country card to retrieve
 *     responses:
 *       200:
 *         description: Successfully retrieved the country card
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 post:
 *                   type: object
 *       404:
 *         description: Country card not found
 *       500:
 *         description: Server error
 */

//get one country
router.get("/getone/:userId",getOneCardCountry)

module.exports = router;