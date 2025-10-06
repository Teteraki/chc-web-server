const router = require("express").Router();
const contentController = require("../controllers/contentController");

router.get("/", contentController.serve);
router.get("/founders", contentController.serve);
router.get("/contact", contentController.serve);

module.exports = router;