import React, { useState} from 'react'
import Router from "next/router";
import { card } from '@/components/cards'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { getISBN, getRecommendation } from '@/lib/helper'
const recommendation = () => {
  const router = useRouter();
  const [data, setdata] = useState(undefined)
  const [isbn, setisbn] = useState(undefined)
  
  const handleCardClick=(nameofbook)=>{
    // getISBN(nameofbook)
    // .then((res) => {
    //   setisbn(res)
    // })
    // .catch((res) => {
    //   console.warn(res);
    // })

    if(nameofbook){
      console.log("hello")
      #router.push(
        #`/dash/${nameofbook}`
        #)

    }
  }
  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (!event.target.book_name.value) {
      alert(`Please Entere Name..`);

    }
    getRecommendation(event.target.book_name.value)
      .then((res) => {
        setdata(res)
      })
      .catch((res) => {
        console.warn(res);
      })
      
    }
  return (
    <div className='h-screen overflow-y-scroll no-scrollbar'>
      <div className='h-[10rem] sm:flex justify-center'>

        <div className='p-[2rem]'>
          <Image src={'/images/recommendation.png'} height={500} width={500} />
        </div>
        <div className='p-[2rem]'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <h1 className='text-xl py-4 text-center'>Enter the Name of Your Favorite Book</h1>

            <input name='book_name' class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' placeholder="Name" />
            <button class="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='max-sm:mt-[15rem] mt-[5rem]'>
        {
          data?
          <section className="text-gray-600 body-font sm:mb-14">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4n justify-center">

                    {
                       data.map((val) => (
                   
                        <div className="p-4 md:w-1/3" key={val[3]} onClick={()=>handleCardClick(val[0])}>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-black">
                                <div>
                                    {/* <Image src={val.image} height={100} width={500}/> */}
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={val[2]} alt="blog"></img>
                                </div>
                                <div className="p-6 bg-white opacity-70 h-full">
                                    <h1 className='font-serif text-black text-center'>{val[0] || "#"}</h1>
                                    <h1 className='font-extralight text-black text-center'>{"By "+val[1] || "#"}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
            </div>
        </section>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default recommendation
