import React, { useState } from "react"
import { Link } from "react-router-dom"

const initialState = {
  email: "",
  password: "",
  error: "",
  loading: false,
  message: "",
}

const LoginComponent = () => {
  const [formValues, setFormValues] = useState(initialState)

  const { email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormValues({ ...formValues })
    const userLogins = { email, password }
    console.log(userLogins)
    setFormValues({ email: "", password: "" })
  }

  const handleChange = (name) => (e) => {
    setFormValues({ ...formValues, [name]: e.target.value })
  }

  return (
    <div className="bg-white h-screen dark:bg-gray-800">
      <div className="  w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center dark:text-gray-300 text-3xl">
              Welcome back{" "}
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <label
                  htmlFor="email"
                  className="text-2xl mb-2 text-gray-500 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  autoFocus
                  required
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  onChange={handleChange("email")}
                  className="shadow font-mono   h-12 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:border-b-4 focus:border-gray-900 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label
                  htmlFor="password"
                  className="text-2xl mb-2 text-gray-500 dark:text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange("password")}
                  className="shadow appearance-none rounded-md border h-12  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:border-b-4 focus:border-gray-900 focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 cursor rounded-md text-white font-bold text-lg hover:bg-green-900 p-2 mt-8"
              >
                Login
              </button>
            </form>
            <div className="text-center pt-12 pb-12 dark:text-gray-400">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="underline font-semibold hover:text-gray-500 "
                >
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            alt=""
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
