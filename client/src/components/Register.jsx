import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/authSlice'
import {  useNavigate } from 'react-router-dom'

const Register = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const auth = useSelector(state => state.auth)

    useEffect(()=>{
        if(auth._id){
            navigate('/')
        }
    },[auth._id,navigate])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(user))
    }

    return (
        <div  className='py-12 mt-6'>
            <form className='flex flex-col text-center mt-4' onSubmit={handelSubmit}>
                <h2 className='font-serif text-blue-900 font-extrabold text-[40px]'>Register</h2>
                <div className='flex flex-col justify-center items-center mt-5'>

                    <input className='my-2 border border-gray-800 p-2 rounded-xl w-80 ' type='text' placeholder="Name" 
                    onChange={(ev) => setUser({ ...user, name: ev.target.value })} />
                 
                    <input className='my-2 border border-gray-800 p-2 rounded-xl w-80 ' type='email' placeholder="Email" onChange={(ev) => setUser({ ...user, email: ev.target.value })} />
                    <input className='my-2 border border-gray-800 p-2 rounded-xl w-80 ' type='password' placeholder="Password" onChange={(ev) => setUser({ ...user, password: ev.target.value })} />
                    <button
                     className='bg-blue-600 w-80 mt-3 text-white rounded-xl p-2'>{
                     auth.registerState === 'Pending' ? 'Submitting' : 'Register'}
                    </button>

                    {auth.registerStatus === 'rejected' ? <p className='text-red-800'>{auth.registerError}</p> : null}
                </div>
            </form>
        </div>
    )
}

export default Register