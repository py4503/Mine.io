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
            setError(error.message);
        }
    }
  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <span className='inline-block w-full max-w-[100px]'>
            <Logo width = "100%"/>
        </span>
      </div>
       <h2 className='text-center text-2xl font-bold leading-tight'>
           Sign up to create account
        </h2>
        <p className='mt-2 text-center text-base text-black/60'>
           Already have an account?
        </p>
        <Link
        to="/login"
        className='font-medium transition-all duration-200 hover:underline'
        >Sign in</Link>
        {error && <p className="text-red-500 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)}>
            <div className="space-y-5">
                <Input
                label = "Email:"
                type = "email"
                placeholder = "Enter your email"
                {...register("name", {
                    required:true,
                    validate:{matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be valid "}
                })}
                />
                <Input
                label = "password"
                placeholder = "Enter your password"
                {...register("password",{
                    required:true
                })}
                />
                <Button>Create Account</Button>
            </div>
        </form>
    </div>
  )
}

export default Signup
