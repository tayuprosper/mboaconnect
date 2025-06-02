import React from 'react'
import School from '@mui/icons-material/School'
import { TrendingUp, Work } from '@mui/icons-material'

import WhyUsCard from './WhyUsCard'

function Whyus() {
  return (
    <div className="w-full px-4 md:px-16 lg:px-[10em]">
      <h1 className="font-extrabold m-5 underline text-2xl sm:text-3xl text-blue-700 text-center">
        Why Choose MboaConnect
      </h1>

      <div className="mt-5 w-full flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
        <WhyUsCard Icon={School} />
        <WhyUsCard Icon={TrendingUp} />
        <WhyUsCard Icon={Work} />
        <WhyUsCard Icon={Work} />
      </div>
    </div>
  )
}

export default Whyus
