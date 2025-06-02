import React from 'react'
import LearnerDashboard from '../components/LearnerDashboard'
import { useNavigate } from 'react-router-dom'
import Navbar from '../commons/Navbar'
function Dashboard() {
    const user = localStorage.getItem("role")
   const navigate = useNavigate()
   if (!user){
    navigate("/login");
   }
  return (
    <div>
        <Navbar/>
        { user == "tutor" ? <TutorDashboard/> : <LearnerDashboard/> } 
        </div>
  )
}

export default Dashboard