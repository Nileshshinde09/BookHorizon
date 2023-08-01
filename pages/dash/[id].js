import React, { useState,useEffect } from 'react'
import { getBookDetails } from '@/components/bookdetails';
import { useRouter } from 'next/router';
import Image from 'next/image';
const id = () => {
  const [data, setdata] = useState(false)
  const [isloaded, setLoaded] = useState(true)
  const router = useRouter()

  const { id } = router.query;
   
  useEffect(()=>{
    if (id) {
      if(isloaded){

        getBookDetails(id)
        .then((res) => {
          setdata(res)
          console.log(data)
          if(data) setLoaded(false)
        })
        .catch((error) => {
          console.error(error)
        })
        
      }
    }
      })    
  return (
      <>
      {
        data?
          <div className='mx-auto bg-transparent md:w-1/2 w-4/5 h-screen mt-[1rem] md:mb-[3rem]'>
            <div className='bg-transparent w-[18rem] mx-auto rounded-3xl h-screen'>
            <Image src={"/images/mobile.png"} height={300} width={300} className='mx-auto shrink-0 absolute'/>
            <div>

            <div className='mx-auto'>
              <img src={data.Image} height={300} width={200} className='mx-auto pt-[1rem]'/>
            </div>
            <div className='px-[2rem]'>
            <hr className='border-black my-1'/>
            <h1 className='text-center text-2xl font-serif '>{data.BookTitle}
            </h1>
            <hr className='border-black'/>
            <h1 className='text-center font-semibold text-xl text-zinc-800'>By</h1>
            <h1 className='text-center font-semibold text-xl text-zinc-800'>{data.BookAuthor}<hr className='border-black'/></h1>
            <h1 className='text-center font-semibold text-xl text-zinc-800'>Publisher</h1>
            <h1 className='text-center font-semibold text-xl text-zinc-800'>{data.Publisher}<hr className='border-black'/></h1>
            {/* <h1 className='text-center font-semibold text-xl text-zinc-800'>Year</h1>
            <h1 className='text-center font-semibold text-xl text-zinc-800'>{data.YearOfPublication}<hr className='border-black'/></h1> */}
            <h1 className='text-center font-semibold text-xl text-zinc-800'>ISBN</h1>

            <h1 className='text-center font-semibold text-xl text-zinc-800'>{data.ISBN}</h1>
            </div>
          </div>
            </div>
          </div>
          :
          <></>
      }
    </>
  )
}

export default id;