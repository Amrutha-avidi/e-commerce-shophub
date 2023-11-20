import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem,getTotal } from '../features/cartSlice';
import store from '../features/store'

import { useSelector, useDispatch } from 'react-redux'

const ProductItemDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { productItems } = useSelector(state => state.products)

  const reqProduct = productItems.find(each => each.id === parseInt(id))

  if (!reqProduct) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }
  const { title, price, description, category, image } = reqProduct

  const addToCart = (product) => {
    dispatch(addItem(product))
    store.dispatch(getTotal())

  }


  return (
    <div className='py-12 mt-6'>
      <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
        <div className='container mx-auto'>
          <div className='p-3 flex items-center flex-col lg:flex-row'>
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[180px] lg:max-w-sm ' src={image} alt={title} /></div>
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='capitalize font-medium font-mono 
             bg-gray-100 text-black border  p-3'>{category}</h1>
              <h1 className='text-[20px] md:text-[25px] font-medium m-5 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
              <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>

              <p className='mb-8'>{description}</p>
              <button 
              className='bg-purple-400 font-semibold rounded-lg text-white px-4 py-2' 
              onClick={() => addToCart(reqProduct)}
              >Add To Cart</button>


            </div>

          </div>

        </div>
      </section>




    </div>
  )
}

export default ProductItemDetails