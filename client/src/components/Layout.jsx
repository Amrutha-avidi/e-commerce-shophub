import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './Header'
import  store  from '../features/store'


const Layout = () => {
    return (
       <>
        <Provider  store={store}>
            <Header />
            <Outlet />
        </Provider>
        </>
    )
}

export default Layout