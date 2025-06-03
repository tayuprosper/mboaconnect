import React from 'react'
import CoursesSearch from '../components/CoursesSearch'
import AllCoursesList from '../components/AllCoursesList'
import Navbar from '../commons/Navbar'
import { useNavigate } from 'react-router-dom'
function CoursesPage() {
    const navigate = useNavigate();
    const user = localStorage.getItem("token")
    if(!user){
        navigate("/login");
    }
  return (
    <>
    <Navbar/>
    <div className='p-[6em]'>
        <p className='text-blue-700 font-bold text-3xl'>Browse over 300+ courses</p>
        <CoursesSearch/>
        <AllCoursesList/>
    </div>
    </>
  )
}

export default CoursesPage