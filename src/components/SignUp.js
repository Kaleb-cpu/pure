import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Form = () => {
  // functions that handle the form using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function that handles onSubmit using handleSubmit function
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div class="flex flex-col items-center">
      <div class="flex flex-col justify-center items-center">
        {/* <Image src="/logo-black.png" alt="Pure logo" width="50" height="50" /> */}
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          class="space-y-4"
          action="#"
          method="POST"
        >
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div class="mt-2">
              <input
                {...register("firstName", {
                  required: "Please enter your first name",
                  minLength: {
                    value: 2,
                    message: "Please enter a valid first name",
                  },
                })}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && (
                <div className="text-red-500 font-error">
                  {errors.firstName.message}
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div class="mt-2">
              <input
                {...register("lastName", {
                  required: "Please enter your last name",
                  minLength: {
                    value: 2,
                    message: "Please enter a valid last name",
                  },
                })}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && (
                <div className="text-red-500 font-error">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                {...register("email", {
                  required: "Please enter your email address",
                  pattern: {
                    value: /^\S+@\S+\.\S{2,}$/i,
                    message: "Invalid Email",
                  },
                })}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div>
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div class="mt-2">
              <input
                {...register("username", {
                  required: "Please enter your username",
                  message: "Please enter a valid username",
                })}
                type="text"
                autocomplete="username"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.username && (
                <div className="text-red-500">{errors.username.message}</div>
              )}
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 8,
                    message: "Password must have atleast 8 characters ",
                  },
                })}
                type="password"
                
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div class="mt-2">
              <input
                {...register("confirmPassword")}
                type="password"
                
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
