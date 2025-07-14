import React from 'react'
import {Signup as SignupComponent} from '../components'
import login_image from '../assets/Animation - 1749387227812.json'
import Lottie from 'lottie-react'

function Signup() {
  return (
<div className="w-full min-h-screen bg-gradient-to-br from-white via-slate-100 to-white flex items-center justify-center px-4 py-12 relative overflow-hidden">
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-300 via-pink-200 to-blue-200 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-bl from-blue-300 via-indigo-200 to-pink-300 opacity-30 blur-3xl rounded-full z-0 animate-pulse" />
  <div className="relative z-10 max-w-4xl w-full bg-white shadow-xl rounded-3xl flex flex-col md:flex-row overflow-hidden">
    <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-100 via-pink-100 to-white items-center justify-center p-6">
  <Lottie animationData={login_image} loop = {true} className='w-full max-w-sm'/>
    </div>
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create An Account👋
      </h2>
      <p className="text-gray-500 mb-8 text-center">
        Please sign in to your account to continue.
      </p>
      <SignupComponent/>
    </div>
  </div>
</div>
  )
}

export default Signup
