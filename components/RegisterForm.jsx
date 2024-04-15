"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiMail } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { signUpSchema } from "@/utils/RegisterZodSchema";
import { HiOutlineEyeOff } from "react-icons/hi";

const RegisterForm = () => {
  // color border Inputs on Focus
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  // color border Inputs on Focus

  // password eye
  const [eyeClicked, setEyeClicked] = useState(false);
  // password eye

  // Focus on start with useRef
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  // Focus on start with useRef

  // useEffect to focus on Name input on start
  useEffect(() => {
    nameInputRef.current.focus();
  }, []);
  // useEffect to focus on Name input on start

  // Variable to handle text input
  const [textInputs, setTextInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Variable to handle text input

  // handleTextUpdate
  function handleTextUpdate(event) {
    const propertyName = event.target.name;
    const currentValue = event.target.value;

    setTextInputs((prevState) => ({
      ...prevState,
      [propertyName]: currentValue,
    }));
  }
  // handleTextUpdate

  // Form onSubmit
  function handleSignupSubmitFx(e) {
    e.preventDefault();

    console.log(textInputs);

    // First: check there's no empty input
    if (
      textInputs.fullName.trim().length === 0 ||
      textInputs.email.trim().length === 0 ||
      textInputs.password.trim().length === 0
    ) {
      toast.error("Please fill in all the fields");
      return false;
    }
    // First: check there's no empty input

    // Zod Validation
    try {
      signUpSchema.parse(textInputs);
    } catch (error) {
      console.log(error.errors);
      toast.error(
        (t) => (
          <div className="flex flex-col">
            {error.errors.map((error, index) => (
              <span className="mb-2" key={index}>
                {error.message}
              </span>
            ))}
          </div>
        ),
        { id: "error" }
      );
    }
  }
  // Form onSubmit

  return (
    <form
      onSubmit={handleSignupSubmitFx}
      className="mb-0 mt-6 space-y-4 rounded-lg p-10 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">
        Complete form to Sign up
      </p>

      <div>
        <label htmlFor="email" className="sr-only">
          Your Name
        </label>

        <div className="relative">
          <div className="absolute top-[14px] left-2">
            <FaUser
              size={28}
              className={`${nameFocus ? "text-indigo-600" : "text-gray-300"}`}
            />
          </div>
          <input
            ref={nameInputRef}
            name="fullName"
            value={textInputs.fullName}
            type="text"
            className={`${
              nameFocus ? "outline-indigo-600" : "outline-gray-300"
            } w-full rounded-lg p-4 pe-12 pl-12 text-sm shadow-sm border`}
            placeholder="Your Name"
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            onChange={handleTextUpdate}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <div className="absolute top-[14px] left-2">
            <HiMail
              size={32}
              className={`${emailFocus ? "text-indigo-600" : "text-gray-300"}`}
            />
          </div>
          <input
            type="email"
            name="email"
            value={textInputs.email}
            className={`${
              emailFocus ? "outline-indigo-600" : "outline-gray-300"
            } w-full rounded-lg p-4 pe-12 pl-12 text-sm shadow-sm border`}
            placeholder="Enter email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChange={handleTextUpdate}
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
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <div className="relative">
          <div className="absolute top-[14px] left-2 text-gray-300">
            <HiLockClosed
              size={32}
              className={`${
                passwordFocus ? "text-indigo-600" : "text-gray-300"
              }`}
            />
          </div>
          <input
            type={`${eyeClicked ? 'text' : 'password'}`}
            name="password"
            value={textInputs.password}
            ref={passwordInputRef}
            className={`${
              passwordFocus ? "outline-indigo-600" : "outline-gray-300"
            } w-full rounded-lg p-4 pe-12 pl-12 text-sm shadow-sm border`}
            placeholder="Enter password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            onChange={handleTextUpdate}
          />

          <span 
          className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer" 
          onClick={()=>{
            setEyeClicked(!eyeClicked)
            passwordInputRef.current.focus();
            setTimeout(()=> {
              passwordInputRef.current.setSelectionRange(
                textInputs.password.length,
                textInputs.password.length,
              );
            }, 0);
          }}>
            {eyeClicked ? (
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
            ): (
              <HiOutlineEyeOff className="text-gray-400" />
            )}
           
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign up
      </button>

      <p className="text-center text-sm text-gray-500">
        No account? <a className="underline" href="#"></a>
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
