import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".02" className="w-full py-19 bg-[#0700c6]  rounded-tl-3xl rounded-tr-3xl">
    <div className="text  border-b-2 border-zinc-300 overflow-hidden flex  whitespace-nowrap">
      <h1
        className="text-[17vw] text-zinc-300 leading-none font-[Founders Grotesk] uppercase font-bold -mt-9 -pt-1 px-20 mb-3 pr-20"
      >
        About Me
      </h1>
      
    </div>
    
  </div>
  )
}

export default Marquee