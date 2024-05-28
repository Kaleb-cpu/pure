"use client"; // This is a client component 👈🏽

import { React, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LandingPage() {
  // useState to handle transition signin page and signup page
  const [signin, setSignin] = useState(true);

  // function that handles the toggle
  function handleTogglePage() {
    setSignin(!signin);
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center border-2 border-secondary h-5/6 p-2 w-1/2">
        <h1 className="text-secondary">Welcome!</h1>
        <h3 className="text-secondary">Sign in to view and manage your songs</h3>
      </div>
      <div className="flex flex-col justify-center items-center h-5/6 w-1/6">
        {signin ? <SignIn /> : <SignUp />}

        <div onClick={handleTogglePage}>
          {signin ? (
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
                Sign in
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
