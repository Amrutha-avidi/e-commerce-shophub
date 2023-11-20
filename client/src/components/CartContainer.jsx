import React, { useEffect } from 'react'
import { Arrow, CartBag, Minus, Plus } from '../icons';
import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, decreaseItemQuantity, getTotal, clearCart } from '../features/cartSlice';
import { logoutUser } from '../features/authSlice'

const CartContainer = () => {
  const cart = useSelector(state => state.cart)
  const auth = useSelector(state => state.auth)

  const { cartItems, cartAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate= useNavigate()

  useEffect(() => {
    dispatch(getTotal())
  }, [cart])

  const removeFromCart = (product) => {
    dispatch(removeItem(product))
  }

  const handelDecreaseQuantity = (cartItem) => {
    dispatch(decreaseItemQuantity(cartItem))
  }
  const handelIncreaseQuantity = (cartItem) => {
    dispatch(addItem(cartItem))
  }
  const handelClearCart = () => {
    dispatch(clearCart())
  }


  return (
    <div className='py-12 mt-6'>
      <h1 className='text-3xl justify-center mt-5 flex font-mono  items-center gap-3 underline text-red-700'>Shopping Cart
        <CartBag />
      </h1>
      {cartItems.length === 0 ? (
        <div className='flex flex-col justify-center items-center text-center mt-5'>
          <img src='src/assets/empty.png' alt='empty-cart' className='w-[500px] h-[400px]' />
          <h4>Looks like you haven't made your choices yet</h4>
          <Link to='/' className='flex justify-center gap-2 text-xl items-center' style={{ textDecoration: 'none' }}>
            <Arrow />

            Start Shopping</Link>
        </div>
      ) : (
        <div className='mb-10'>
          <div>
            {cartItems?.map(eachProduct => (
              <div key={eachProduct.id} >
                <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-between shadow-md my-4  p-3 md:px-5 md:mx-20 md:my-5' >
                  <div className='grid grid-cols-2 items-center'>
                    <img src={eachProduct.image} alt={''} className='w-[90px], h-[90px] md:w-[130px], md:h-[130px]' />
                    <h2 className='hidden w-[200px]  md:block md:text-xl' >{eachProduct.title}</h2>
                  </div>
                  <div className='hidden md:flex md:items-center md:justify-center md:gap-2 '>
                    <button onClick={() => handelDecreaseQuantity(eachProduct)} >
                      <Minus />
                    </button>
                    <div className='bg-gray-400 px-2 py-1 font-semibold'>{eachProduct.cartQuantity}</div>

                    <button onClick={() => handelIncreaseQuantity(eachProduct)}>
                      <Plus />
                    </button>
                  </div>
                  <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
                    <h2 className='block text-[18px]  font-semibold md:hidden' >{eachProduct.title}</h2>
                    <div className='flex items-center gap-2 md:hidden'>
                      <button onClick={() => handelDecreaseQuantity(eachProduct)} >
                        <Minus />
                      </button>
                      <div className='bg-gray-400 px-2 py-1 font-semibold'>{eachProduct.cartQuantity}</div>

                      <button onClick={() => handelIncreaseQuantity(eachProduct)}>
                        <Plus />
                      </button>
                    </div>
                    <p className='font-semibold text-xl text-blue-700'>
                      $ {(eachProduct.price * eachProduct.cartQuantity).toFixed(2)}
                    </p>
                    <button className='bg-red-500 cursor-pointer
                             text-white rounded-xl font-semibold p-2 md:p-3 md:w-[150px]'
                      onClick={() => removeFromCart(eachProduct)}
                    >Remove Item</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center md:px-20  '>
            <div>
              <button className='p-3 font-normal cursor-pointer 
              text-md border bg-slate-600 hover:bg-slate-700
               rounded-2xl text-white border-gray-400'
                onClick={() => handelClearCart()}>Clear Cart</button>
            </div>
            <div className='flex-col text-center items-center border p-3 md:p-4 w-[200px] md:w-[250px]'>
              <h3 className='text-xl md:text-2xl text-gray-700 font-serif font-thin'>Sub Total</h3>
              <h4 className='text-xl md:text-2xl'>$ {cartAmount.toFixed(2)}</h4>

              {auth._id ? (
                <button onClick={() => {
                  dispatch(logoutUser(null))
                  dispatch(clearCart())
                }} className='p-3 w-[120px] cursor-pointer  md:w-[200px] mb-3 font-normal text-md border bg-blue-600 hover:bg-blue-700 rounded-2xl text-white border-gray-400'>
                  Check Out
                </button>

              ) : (
                <button onClick={() => navigate('/login')
                 } className='p-3 w-[120px] cursor-pointer  md:w-[200px] mb-3 font-normal text-md border bg-yellow-500 hover:bg-yellow-600 rounded-2xl text-white border-gray-400'>
                  Login to Check Out
                </button>

              )}


              <Link to={'/'} style={{ textDecoration: 'none' }} className='text-center cursor-pointer'>
                <div className='flex md:gap-3'>
                  <Arrow />
                  <div> Continue Shopping</div>
                </div>

              </Link>

            </div>

          </div>
        </div>
      )

      }

    </div>
  )
}

export default CartContainer