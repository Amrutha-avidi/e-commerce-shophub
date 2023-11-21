import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HeaderBag } from '../icons'
import { logoutUser } from '../features/authSlice'

const Header = () => {
  const { cartTotalQuantity } = useSelector(state => state.cart)
  const auth = useSelector(state => state.auth)
  const dispatch  = useDispatch()


  return (
    <div  >
      <header className='fixed  w-full z-10 transition-all flex justify-between items-center px-6'>
        <Link to='/'  >
          <img className='w-[180px]' src='src/assets/logo.png' alt='logo' />
        </Link>
        <div className='flex items-center gap-12'>
          <Link  className='font-semibold' to='/'  >
            Products
          </Link>
          {auth._id ? (
              <>
                <Link className='px-4 font-semibold' onClick={() => {
                  dispatch(logoutUser(null))
                }}>Logout</Link>

              </>
            ) : (
              <>
              <Link className='font-semibold' to='/login'>Login</Link>
              <Link className='font-semibold' to='/register'>Register</Link>
              </>
            )}
          

          <Link to="/cart"
            className='cursor-pointer  flex items-center relative  mr-10'>
            <HeaderBag />
            <div className='bg-red-500 absolute -right-2 -bottom-1   w-[25px]
         h-[25px] text-white flex justify-center items-center rounded-full text-[15px]'>{cartTotalQuantity}</div>

          </Link>
        </div>

      </header>
    </div>
  )
}

export default Header