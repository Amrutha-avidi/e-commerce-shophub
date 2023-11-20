import React from 'react'
import { useSelector } from "react-redux";


const Banner = () => {
  const auth = useSelector(state => state.auth)

  return (
    <section className='bg-[#e3b4e2] h-[650px] bg-no-repeat bg-cover bg-center mt-6 py-[55px] flex justify-between'>
      <div className='container mx-auto flex justify-around h-full'>
        {auth._id ? (<p className='text-2xl font-semibold font-serif'>Welcome {auth.name}...!!</p>)
          : (<div className='flex flex-col'>
          <p className='text-2xl font-semibold font-serif'>Hello There..!!
            </p>
            <a
            className='font-normal  font-serif text-blue-600 underline text-sm'
            href='/login'>Please Login</a></div>
            )}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            <div>New Trends</div>
          </div>
          <h1 className='font-primary leading-[1.1] font-light  text-[60px]'>WINTER SALE <br />
            <span className='font-semibold text-[40px] md:text-[50px]'>MEN and WOMEN</span>

          </h1>

        </div>
        <div className='hidden lg:block'>
          <img className='w-[31rem]' src='src/assets/3.png' alt='logo' />

        </div>
      </div>

    </section>
  )
}

export default Banner