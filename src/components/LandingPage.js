"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { React, useState } from "react";
import LogIn from "@/components/Forms/SignIn";
import SignUp from "@/components/Forms/SignUp";

function LandingPage() {
  // useState to handle transition signin page and signup page
  const [login, setLogin] = useState(true);

  // function that handles the toggle
  function handleTogglePage() {
    setLogin(!login);
  }

  return (
    <div className="flex h-screen justify-center items-center bg-primary">
      <div className="md:flex flex-row justify-center items-center mr-2 h-5/6 p-2 w-1/2 hidden">
      <Image 
        src="/landingPage.gif"
        width={1500}
        height={1500}
        alt="Landing page photo"
      ></Image>
      {/* <div>
        
        <h1 className="text-secondary">Welcome!</h1>
        <h3 className="text-secondary">Log in to view and manage your songs</h3>
      </div> */}
      </div>
      <div className="flex flex-col h-5/6 justify-center">
        {login ? <LogIn /> : <SignUp />}

        <div onClick={handleTogglePage}>
          {login ? (
            <p className="mt-10 text-center text-sm text-secondary">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 text-teritary hover:text-secondary pl-1"
              >
                Create account
              </a>
            </p>
          ) : (
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <a
                href="#"
                className="font-semibold leading-6 text-teritary hover:text-secondary pl-1"
              >
                Log in
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
