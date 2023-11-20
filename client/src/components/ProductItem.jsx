import React from 'react'
import { AddingIcon, Eye } from '../icons'
import { Link } from 'react-router-dom'
import { addItem,getTotal } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import store from '../features/store'

const ProductItem = (product) => {
  const { id, image, title, price, category } = product
  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addItem(product))
    store.dispatch(getTotal())

  }
  return (
    <div className='shadow-lg  h-[300px] hover:shadow-2xl  p-4 relative group
    overflow-hidden transition' key={id}>
      <div className=' flex flex-col justify-between  
      transition-all hover:transition-all '>
          <div className=' flex justify-center items-center'>
            <img className='max-h-[150px] group-hover:scale-110 duration-300 '
              src={image} alt={title} />
          </div>
          <div className='mt-3' >
            <h1 className='text-sm mb-1 text-gray-500 capitalize font-mono'>{category}</h1>
            <h1 className='font-semibold text-md'>{title.substring(0, 20)}...</h1>
            <p>$ {price}</p>
          </div>
      </div>
      <div className=' absolute top-4 right-5 
       group-hover:right-9 flex flex-col justify-center items-center 
      opacity-0 group-hover:opacity-100 transition-all 
     ' >
        <button onClick={() => addToCart(product)} >
          <div className='flex justify-center items-center bg-red-500 w-8 h-8  '>
            <AddingIcon />
          </div>
        </button>
        <Link to={`/product/${id}`}  className='w-8 h-8  flex justify-center items-center bg-white'>
          <Eye/>
          
        </Link>
      </div>
    </div>
  )
}

export default ProductItem