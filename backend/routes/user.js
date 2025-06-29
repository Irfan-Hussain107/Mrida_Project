const express = require("express")
const {handelUserRegistration, handelLogInRequest} = require("../controller/user")
const {handelProductPostRequest} = require("../controller/product")
const {checkAuth} = require("../middleware/auth")
const {handelWorkPostRequest} = require("../controller/work")
const {upload1, upload2} = require("../controller/image")

const router = express.Router()

router.post("/", handelUserRegistration)
router.post("/login", handelLogInRequest)
router.post("/post/product", checkAuth, upload1.single("image"), handelProductPostRequest)
router.post("/post/work", checkAuth, upload2.single("image"), handelWorkPostRequest)

module.exports = router