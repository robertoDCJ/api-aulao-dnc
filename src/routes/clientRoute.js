const express = require("express");
const router = express.Router();
const { createClient, getClient } = require("../controllers/clientController");

router.get("/reservation", getClient);
router.post("/reservation", createClient);

module.exports = router;
