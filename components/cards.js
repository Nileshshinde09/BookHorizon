import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getData } from '@/lib/helper';
const cards = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await getData()
            if (fetchedData) {
                setData(fetchedData);
            }
        };


        fetchData();
    }, []); 
    
    
    
    return (
        <section className="text-gray-600 body-font sm:mb-14">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4n justify-center">

                    {
                        card({ data })
                    }

                </div>
            </div>
        </section>
    )
}
export const card = ({ data }) => {
    const router = useRouter();
    const handleCardClick=(nameofbook)=>{
      // getISBN(nameofbook)
      // .then((res) => {
          //   setisbn(res)
          // })
          // .catch((res) => {
              //   console.warn(res);
              // })
              
              if(nameofbook){
        
                  router.push(
          `/dash/${nameofbook}`
          )
    
      }
    }
    
    return (
        <>
        
            {
            
                data.map((val) => (
                    
                    <div className="p-4 md:w-1/3" key={val.id} onClick={()=>handleCardClick(val.book_name)}>


                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg shadow-black">
                            <div>
                                {/* <Image src={val.image} height={100} width={500}/> */}
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={val.image} alt="blog"></img>
                            </div>
                            <div className="p-6 bg-white opacity-70 h-full">
                                <h1 className='font-serif text-black text-center'>{val.book_name || "#"}</h1>
                                <h1 className='font-extralight text-black text-center'>{"By "+val.author || "#"}</h1>
                                <h1 className='font-semibold text-xs text-black text-center'>{"Rating : "+val.rating || "#"}</h1>
                                <h1 className='font-semibold text-xs text-black text-center'>{"Votes : "+val.votes || "#"}</h1>

                            </div>
                        </div>
                    </div>
                ))
                
            }
        </>
    )
}
export default cards