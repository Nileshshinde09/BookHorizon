import React from 'react'
import Image from 'next/image'
const trendingSection = () => {
  return (
    <>
    <div className='my-2'>
        <div className='bg-black rounded-full w-[5rem] mx-auto shadow-xl shadow-black hover:animate-bounce'>
        <Image alt={'#'} src={'/images/trending.png'} height={100} width={100}/>
        </div>
        <div className='w-[6rem] mx-auto text-2xl'>
            Trendings
        </div>
    </div>
    {/* <div>
        <Image src={"/images/mobile.png"} height={200} width={200}/>
    </div> */}
    </>
  )
}

export default trendingSection
