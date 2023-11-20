import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('cartItems') !== null ? JSON.parse
    (localStorage.getItem('cartItems')) : []

const initialState = {
    cartItems:items,
    cartTotalQuantity:0,
    cartAmount:0
    
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            const itemIndex = state.cartItems.findIndex((item) =>
                 item.id === action.payload.id
            );
            if(itemIndex>=0){
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex], cartQuantity:state.cartItems[itemIndex].cartQuantity + 1
                }
            }
            else{
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
            }
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems.map((item) => item))
            )
           

            
        },
        removeItem(state, action) {
            const updatedCart = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = updatedCart
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))


           
        },

        decreaseItemQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1

               
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const updatedCart = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = updatedCart
              
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        clearCart(state,action){
            state.cartItems=[]
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },

        getTotal(state,action){
            let {total,quantity} = state.cartItems.reduce((cartTotalAmount,cartItem)=>{
                const{price,cartQuantity} = cartItem;
                const itemTotal = price* cartQuantity;
                cartTotalAmount.total += itemTotal
                cartTotalAmount.quantity+=cartQuantity

                return cartTotalAmount
            }, {
                total:0,
                quantity:0

            })
            state.cartTotalQuantity = quantity
            state.cartAmount = total
        },
    },
   
})

export const { addItem,removeItem,decreaseItemQuantity,clearCart,getTotal} = cartSlice.actions
export default cartSlice.reducer