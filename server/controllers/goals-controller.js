const asyncHandler = require("express-async-handler")
const Goal = require("../models/Goal")
const User = require("../models/User")

// @desc Get all goals
// @route GET /api/goals
// @access Private
const getAllGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })

  res.status(200).json(goals)
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error("Title is required")
  }

  const goal = await Goal.create({
    title: req.body.title,
    user: req.user.id,
  })

  res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }

  if (!req.user) {
    res.status(404)
    throw new Error("User not found")
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }

  if (!req.user) {
    res.status(404)
    throw new Error("User not found")
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("Not authorized")
  }

  await goal.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getAllGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}
