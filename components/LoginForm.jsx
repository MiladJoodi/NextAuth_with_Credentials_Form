"use client"

import Link from "next/link";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";


const LoginForm = () => {

    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    return (
        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-10 shadow-lg sm:p-6 lg:p-8">
        <p className="text-center text-lg font-medium">Sign in to your account</p>
  
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
  
          <div className="relative">
              <div className="absolute top-[14px] left-2">
                    <HiMail size={32} className={`${emailFocus ? 'text-indigo-600' : 'text-gray-300'}`} />
              </div>
            <input
              type="email"
              className={`${emailFocus ? 'outline-indigo-600' : 'outline-gray-300'} w-full rounded-lg p-4 pe-12 pl-12 text-sm shadow-sm border`} 
              placeholder="Enter email"
              onFocus={()=>setEmailFocus(true)}
              onBlur={()=>setEmailFocus(false)}
            />
  
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
  
          <div className="relative">
          <div className="absolute top-[14px] left-2 text-gray-300">
                    <HiLockClosed size={32} className={`${passwordFocus ? 'text-indigo-600' : 'text-gray-300'}`} />
              </div>
            <input
              type="password"
              className={`${passwordFocus ? 'outline-indigo-600' : 'outline-gray-300'} w-full rounded-lg p-4 pe-12 pl-12 text-sm shadow-sm border`} 
              placeholder="Enter password"
              onFocus={()=>setPasswordFocus(true)}
              onBlur={()=>setPasswordFocus(false)}
            />
  
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
  
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
  
        <p className="text-center text-sm text-gray-500">
          No account?{" "}
          <Link href="/register" className="underline">
          Sign up
          </Link>
        </p>
      </form>
    );
}

export default LoginForm;