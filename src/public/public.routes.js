const router = require("express").Router();
const publicController = require("./public.controller");

router.get("/", publicController.serve);
router.get("/founders", publicController.serve);
router.get("/contact", publicController.serve);

module.exports = router;