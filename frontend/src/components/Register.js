import React, { useState } from "react"
import { Link } from "react-router-dom"

const initialState = {
  username: "",
  email: "",
  password: "",
  error: "",
  loading: false,
  message: "",
  showForm: true,
}

const Register = () => {
  const [formValues, setFormValues] = useState(initialState)

  const { username, email, password } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormValues({ ...formValues })
    const user = { username, email, password }
    console.log(user)
    setFormValues({
      username: "",
      email: "",
      password: "",
      error: "",
      loading: false,
      message: "",
      showForm: true,
    })
  }

  const handleChange = (name) => (e) => {
    setFormValues({ ...formValues, [name]: e.target.value })
  }
  return (
    <div className="bg-white font-family-karla h-screen dark:bg-gray-800">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl dark:text-gray-300 ">Join Us.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col pt-4">
                <label
                  htmlFor="username"
                  className="text-2xl mb-2 dark:text-gray-400 text-gray-500"
                >
                  Username
                </label>
                <input
                  required
                  autoFocus
                  type="text"
                  value={username}
                  onChange={handleChange("username")}
                  placeholder="John Smith"
                  className="shadow focus:border-b-4 focus:border-gray-900  appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label
                  htmlFor="email"
                  className="text-2xl mb-2 text-gray-500 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  onChange={handleChange("email")}
                  className="shadow focus:border-b-4 focus:border-gray-900  appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow  focus:border-b-4 focus:border-gray-900 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 rounded-md text-white font-bold text-lg hover:bg-green-900 p-2 mt-8"
              >
                Register
              </button>
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline font-semibold hover:text-gray-500 "
                >
                  Log in here.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block "
            src="https://images.unsplash.com/photo-1570906166424-698571d1dc15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="Background"
          />
        </div>
      </div>
    </div>
  )
}

export default Register
