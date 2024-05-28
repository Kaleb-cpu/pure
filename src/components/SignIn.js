import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
 
function SignInForm() {

  const { register,
          handleSubmit
        } = useForm();
        

  return (
    <div className="flex flex-col items-center 5/6">
      <div className="flex flex-col justify-center items-center">
        <Image src="/logo.png" alt="Pure logo" width="50" height="50" />
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-secondary">
        <form onSubmit={handleSubmit((data) => console.log(data))}  class="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Username
            </label>
            <div className="mt-2">
              <input {...register("username")} id="username" name="username" type="text" autoComplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-secondary hover:text-fourth"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input {...register("password")} id="password" name="password" type="password" autoComplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            
            <SubmitButton type="submit">Sign in</SubmitButton>
          </div>
        </form>        
      </div>
    </div>
  );
};

export default SignInForm;
