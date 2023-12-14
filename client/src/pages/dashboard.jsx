import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import GoalForm from "../components/sections/goal-form"
import Spinner from "../components/ui/spinner"
import { getAllGoals, reset } from "../features/goals/goal-slice"
import GoalItem from "../components/sections/goal-item"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (!user) navigate("/login")

    dispatch(getAllGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch, isError, message])

  if (isLoading) return <Spinner />

  return (
    <>
      <section className="heading">
        <h1>Welcome, {user && user.name}.</h1>
      </section>
      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <>
            <div className="goals">
              <h2>Your Goals</h2>
              <ul>
                {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} />
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>You have no goals.</p>
        )}
      </section>
    </>
  )
}

export default Dashboard
