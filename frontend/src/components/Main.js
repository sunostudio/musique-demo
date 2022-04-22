import React from "react"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-mono  tracking-wide text-gray-800 dark:text-white md:text-4xl">
            Building Your Next music library with our Awesome custom selected
            songs from peers and friends around the world
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
          <button className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg hover:bg-green-800 md:mx-0 md:w-auto focus:outline-none">

            Start 14-Day free trial
          </button>
          <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-full h-64 bg-fuchsia-300 rounded-xl md:w-4/5" />
        </div>
      </div>
    </section>
  )
}

export default Main
