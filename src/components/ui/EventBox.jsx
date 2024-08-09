import React from 'react'

function EventBox({time , category , caption , secondCat=false}) {
  return (
    <div>
    <div className= {`w-11/12 ${secondCat?'h-40':'h-96'} rounded-3xl ${secondCat?'border-[0.1vh]':'border-[1vh]'} border-[#FFBADE]`}></div>
    <p className="text-[#FFBADE] px-2 ml-4 font-mono text-2xl">{ time}</p>
    <p className="text-[#FFBADE] px-2 ml-4 font-mono text-xl">{ category}</p>
        <a href="#" className="text-white ml-4  hover:underline text-2xl px-2 font-semibold">{caption}</a>
    </div>
  )
}

export default EventBox
