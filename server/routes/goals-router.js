const express = require("express")
const router = express.Router()
const {
  getAllGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goals-controller")
const { protect } = require("../middlewares/auth")

router.route("/").get(protect, getAllGoals).post(protect, setGoal)
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router
