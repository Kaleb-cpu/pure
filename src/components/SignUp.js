import React from "react";
import { useForm } from "react-hook-form";
import SubmitButton from './SubmitButton'

function SignUpForm() {
  // functions that handle the form using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // onSubmit function that handles onSubmit using handleSubmit function
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok){
        window.location.href = '/user/dashboard';
      }
      else {
        console.log("Form submission failed")
      }
    }catch(error){
      console.log('Error submitting form', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-5/6">
      <div class="flex flex-col justify-center items-center">
        {/* <Image src="/logo-black.png" alt="Pure logo" width="50" height="50" /> */}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          method="POST"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                {...register("Afirst", {
                  required: "Please enter your first name",
                  minLength: {
                    value: 2,
                    message: "Please enter a valid first name",
                  },
                })}
                
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
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
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                {...register("Alast", {
                  required: "Please enter your last name",
                  minLength: {
                    value: 2,
                    message: "Please enter a valid last name",
                  },
                })}
                
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
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
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("Aemail", {
                  required: "Please enter your email address",
                  pattern: {
                    value: /^\S+@\S+\.\S{2,}$/i,
                    message: "Invalid Email",
                  },
                })}
                
                
                type="email"
                autocomplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-secondary"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                {...register("Ausername", {
                  required: "Please enter your username",
                  message: "Please enter a valid username",
                })}
                
                type="text"
                autocomplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
              />
              {errors.username && (
                <div className="text-red-500">{errors.username.message}</div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                class="block text-sm font-medium leading-6 text-secondary"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 8,
                    message: "Password must have atleast 8 characters ",
                  },
                })}
                
                type="password"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("confirmPassword")}
                
                type="password"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fourth sm:text-sm sm:leading-6"
              />
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

export default SignUpForm;
