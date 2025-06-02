import React from 'react'
function WhyUsCard({ Icon }) {
    return (
        <div className='shadow-2xl rounded-sm w-fit p-5 bg-blue-700 text-white '>
            <div className="icon">
                <Icon className='!text-5xl'/>
            </div>
            <h1 className='font-bold mt-3'>Learn from well Selected Tutors</h1>
            <p className='mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Repellendus labore illo animi asperiores, adipisci
                 alias nisi incidunt. 
                Aut quisquam incidunt tempore quasi, alias error non?
            </p>
        </div>
    )
}

export default WhyUsCard