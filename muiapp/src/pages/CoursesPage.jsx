import React from 'react'
import CoursesSearch from '../components/CoursesSearch'
import AllCoursesList from '../components/AllCoursesList'
import Navbar from '../commons/Navbar'
function CoursesPage() {
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