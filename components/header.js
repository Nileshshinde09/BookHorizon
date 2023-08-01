import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const header = () => {
  return (
    <>
    <div className='h-[10rem] mb-1 md:w-5/6 mx-auto md:h-[3rem] bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 shadow-lg shadow-black md:rounded-b-full sticky'>
        <nav className='max-sm:hidden'>
            <div className='font-medium text-xl py-2 px-4'>

            <ul className='flex space-x-3'>
                <li></li>
                <Link href={'/'}><Image alt={'#'} src={'/images/logo2.png'} width={30} height={10}/></Link>
                <Link href={'/'}><li className='hover:text-red-900 cursor-pointer'>Home</li></Link>
                <Link href={'/recommendation'}><li className='hover:text-red-900 cursor-pointer'>Recommender</li></Link>
                <Link href={'https://github.com/Nileshshinde09/BookHorizon#readme'}><li className='hover:text-red-900 cursor-pointer'>Github</li></Link>
                <Link href={'https://github1s.com/Nileshshinde09/BookHorizon'}><li className='hover:text-red-900 cursor-pointer'>FCode</li></Link>
                <Link href={'https://github1s.com/Nileshshinde09/BookHorizon'}><li className='hover:text-red-900 cursor-pointer'>BCode</li></Link>

                <Link href={'https://github.com/Nileshshinde09/BookHorizon-Backend/blob/main/Book-Recommendetion-System.ipynb'}><li className='hover:text-red-900 cursor-pointer'>ML-Code</li></Link>
            </ul>
            </div>
        </nav>
        <nav className='sm:invisible'>
            <ul className='font-medium text-2xl flex space-x-4 py-2'>
                <div>
                    
                </div>
                <div>
                <Link href={'/'}><Image alt={'#'} src={'/images/logo2.png'} width={120} height={40} className='m-auto'/></Link>
                </div>
                <div className='bg-red-900 px-[1px]'>
                <hr className='rotate-90'/>
                </div>
                <div className='overflow-y-scroll h-[8rem]'>
                <Link href={'/'}><li className='hover:text-red-900 cursor-pointer'>Home</li></Link>
                <Link href={'/recommendation'}><li className='hover:text-red-900 cursor-pointer'>Recommender</li></Link>
                <Link href={'https://github.com/Nileshshinde09/BookHorizon#readme'}><li className='hover:text-red-900 cursor-pointer'>Github</li></Link>
                <Link href={'https://github1s.com/Nileshshinde09/BookHorizon'}><li className='hover:text-red-900 cursor-pointer'>FCode</li></Link>
                <Link href={'https://github1s.com/Nileshshinde09/BookHorizon'}><li className='hover:text-red-900 cursor-pointer'>BCode</li></Link>

                <Link href={'https://github.com/Nileshshinde09/BookHorizon-Backend/blob/main/Book-Recommendetion-System.ipynb'}><li className='hover:text-red-900 cursor-pointer'>ML-Code</li></Link>
                </div>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default header

