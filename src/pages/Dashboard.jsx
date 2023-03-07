import { useAuth } from "../components/auth"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <>
     <div>
      Welcome  {auth.user}
      <button onClick = {handleLogout}>Logout</button>
      </div>
    </>
   
    
  )
}

export default Dashboard