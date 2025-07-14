import { useState } from "react"
import React from 'react'
import authService from "../appwrite/auth"
import { useNavigate, Link } from "react-router-dom"
import { login } from "../store/authSlice"
import {Button, Input, Logo} from './index'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const signup = async(data) => {
        setError("");
        try {
            const account = await authService.createAccount(data);
            if(account){
                const userData = await authService.getCurrentUser();
                if(userData){
                dispatch(login(userData));
                }
                navigate("/");
            }
        } catch (error) {
            console.log("signup error:")
            setError(error.message);
        }
    }
  return (
<div className="flex items-center justify-center bg-gray-50">
  <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg">
    <div className="flex justify-center mb-6">
      <span className="inline-block w-[100px]">
        <Logo width="100%" />
      </span>
    </div>

    <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 mb-2">
      Sign up to create account
    </h2>

    <p className="text-center text-base text-gray-600 mb-4">
      Already have an account?{' '}
      <Link
        to="/login"
        className="font-medium text-blue-600 hover:underline transition duration-200"
      >
        Sign in
      </Link>
    </p>

    {error && (
      <p className="text-red-600 text-center mb-6 font-medium">{error}</p>
    )}

    <form onSubmit={handleSubmit(signup)} className="space-y-6">
      <Input
        label="Email:"
        type="email"
        placeholder="Enter your email"
        {...register('email', {
          required: true,
          validate: {
            matchPattern: (value) =>
              /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
              'Email address must be valid',
          },
        })}
      />
      <Input
        label="Password:"
        type="password"
        placeholder="Enter your password"
        {...register('password', { required: true })}
      />
      <Button type="submit" className="w-full">
        Create Account
      </Button>
    </form>
  </div>
</div>

  )
}

export default Signup
