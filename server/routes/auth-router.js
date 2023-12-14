const express = require("express")
const router = express.Router()
const { protect } = require("../middlewares/auth")

const {
  register,
  login,
  getUserProfile,
} = require("../controllers/auth-controller")

router.post("/register", register)
router.post("/login", login)
router.get("/me", protect, getUserProfile)

module.exports = router
