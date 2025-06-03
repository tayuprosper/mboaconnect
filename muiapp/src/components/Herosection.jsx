import Button from '@mui/material/Button'
import React from 'react'
import { TrendingFlat } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Herosection() {
    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-[10em] py-10 bg-blue-100/30 backdrop-blur-lg">
            <p className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[5em] leading-tight md:leading-[1.2]">
                Empowering university students in Buea to
                <span className="text-blue-700 font-bold"> earn</span>,
                <span className="text-blue-700 font-bold"> grow</span>,
                and <span className="text-blue-700 font-bold">thrive</span>
            </p>

            <p className="text-center text-base sm:text-lg md:text-xl font-semibold mt-6 mb-8">
                — by connecting them with local
                and remote job opportunities tailored
                to their skills.
            </p>

            <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-4 sm:gap-8">
                <Link to={"/features"}><Button className="!border-2 !text-blue-700 !px-6 !py-2">LEARN MORE</Button></Link>
              <Link to={"/signup"} > <Button className="!bg-blue-700 !border-blue-700 !border-2 !font-bold !text-white !px-6 !py-2">
                    GET STARTED
                    <TrendingFlat className="ml-2" />
                </Button></Link>
            </div>
        </div>
    )
}

export default Herosection
