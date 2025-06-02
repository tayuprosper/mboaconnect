import React from 'react'

function DashboardCards({ length }) {
  return (
    <div>
        <div className='shadow-2xl bg-white rounded-sm w-fit p-4'>
    <p className=''>You have</p>
    <p className='font-bold text-4xl'>{length} Courses</p>
    <p className='text-2xl font-semibold'>Currently in progress</p>
    <hr className='mt-5 border-dotted' />
    <div className="prog "></div>
    <div className="maxprog mt-5">
        <p>Maximum Progress</p>
        <div class="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-200">
            <div class="bg-blue-700 h-6 rounded-full" style={{ width: "70%" }}></div>
        </div>
    </div>
    <div className="lowestprog mt-5">
        <p>Minimum Progress</p>
        <div class="w-full  bg-gray-200 rounded-full h-6 dark:bg-gray-200">
            <div class="bg-red-700 h-6 rounded-full" style={{ width: "20%" }}></div>
        </div>
    </div>


</div>
    </div>
  )
}

export default DashboardCards