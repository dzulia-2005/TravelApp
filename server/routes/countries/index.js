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


//create country travel
router.post("/createcountry/:userId",createController);

//delete country travel
router.delete("/deletecountry/:postId",deleteCountryController);

//edit country travel
router.put("/update/:postId",editCountryController);

//like country tour
router.post("/like/:postId",likeCountryController);

//unlike country tour
router.post("/unlike/:postId",unlikeController);

//get all country
router.get("/getall",getAllCountryController)

//get one country
router.get("/getone/:userId",getOneCardCountry)

module.exports = router;