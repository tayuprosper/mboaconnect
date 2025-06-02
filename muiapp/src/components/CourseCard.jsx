import React from 'react'
import { useNavigate } from 'react-router-dom';
function CourseCard({ course }) {
      const navigate = useNavigate();
  return (
    <div 

    onClick={() => navigate(`/courses/${course.id}`, { state: { course } })}
    className='hover:bg-blue-100 w-full max-w-sm shadow-md rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer'>
      <img
        src="https://picsum.photos/400/200"
        className='rounded-md w-full h-48 object-cover mb-2'
        alt={course.title}
      />
      <p className='px-2 py-1 mb-2 bg-blue-300 text-pink-700 w-fit rounded-sm text-sm'>
        {course.difficulty}
      </p>
      <h3 className='font-bold text-lg mb-1'>{course.title}</h3>
      <p className='text-sm text-gray-600 line-clamp-3 mb-2'>{course.description}</p>

      <hr className='border-dotted my-2' />

      <div className="flex justify-between items-center text-sm text-gray-700">
        <div>
          <p><span className='font-semibold'>Tutor:</span> {course.tutor?.user?.name}</p>
          <p><span className='font-semibold'>Expertise:</span> {course.tutor?.expertise}</p>
        </div>
        <div className="text-right">
          <p className='font-bold text-pink-700 text-lg'>{course.price} <span className='text-sm'>XAF</span></p>
          <p className='text-xs text-gray-500'>{course.duration_hours} hrs</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
