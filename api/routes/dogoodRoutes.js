const campBuilder = require('../controllers/dogoodController');
const userController = require("../controllers/userController");
const adController = require("../controllers/advertisementController");
const express = require("express");
const router = express.Router();
const auth = require("../../config/auth");



router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me",auth,userController.getUserDetails);

router.get("/Campaigns",campBuilder.list_all_approved);
router.get("/Campaigns/all",campBuilder.list_all_camps);
router.get("/Campaigns:campId",campBuilder.read_a_camp);
router.post("/campaigns", campBuilder.create_a_camp)
router.post("/campaign/update", campBuilder.update_campaign)

router.get("/ads",adController.list_all_ads);
router.get("/ads:Advid",adController.read_a_ads);
router.post("/ads", adController.create_ad)

module.exports = router;