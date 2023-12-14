import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../../features/goals/goal-slice"

const GoalForm = () => {
  const [goalData, setGoalData] = useState("")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ goalData }))
    setGoalData("")
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="goal">Goal</label>
          <input
            type="text"
            name="goal"
            id="goal"
            value={goalData}
            placeholder="Title"
            onChange={(e) => setGoalData(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
