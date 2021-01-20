const express = require("express");
const router = express();

const { getIndex,getPushNotification } = require("../controllers/indexController.js");

router.get("/", getIndex);
router.get("/fire-push",getPushNotification)


module.exports = router;
