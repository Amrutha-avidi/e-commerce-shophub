import { useEffect } from 'react'

import { useSelector,useDispatch } from "react-redux";
import ProductItem from "./ProductItem";
import Banner from "./Banner";
import {getProductItems} from '../features/productSlice'

const ProductContainer = () => {
  const { productItems } = useSelector((store) => store.products);


  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch an action for getProductItems
    dispatch(getProductItems())

  }, [])

  return (
    <div className="py-12 mt-6">
     
      <Banner />
      <div className="flex flex-col mb-5 px-16 mt-10">
        <h1 className="text-center font-primary text-3xl font-semibold">
          Our Products
        </h1>
        <div
          className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 
        gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
        >
          {productItems.map((each) => {
            return <ProductItem {...each} key={each.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
