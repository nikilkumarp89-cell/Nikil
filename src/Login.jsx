import React from 'react'
import nikkil from '/nikkil.jpg'

const Login = () => {
  return (
    <div className='body max-w-screen flex h-screen bg-[url(/nikkil.jpg)] bg-no-repeat bg-cover justify-center items-center'>
        <div className=' bg-slate-00 w-100 justify-center items-center border-slate-800 flex flex-col h-[300px] rounded-md shadow-lg backdrop-blur-sm  backdrop-filter hover:bg-opacity-10 relative'>
            <div>
                 <label htmlFor="" className='ml-[30px] text-1xl text-semibold  text-black'> user name</label>
                <input type="text" className='block w-72  border-1   border-white pl-5  rounded-[20px] text-white bg-transparent py-2.5 px-0' />
               
            </div>
             <div>
                <label htmlFor="" className='ml-[30px] text-1xl text-semibold text-black'> user password</label>
                <input type="text" className='block w-72  border-1   border-white pl-5  rounded-[20px] text-white bg-transparent py-2.5 px-0' />
                
            </div>
             <div>
                <input type="checkbox" />
                <label htmlFor=""> remember me</label>
            </div>
            <button>Login</button>
        </div>
      
    </div>
  )
}

export default Login
