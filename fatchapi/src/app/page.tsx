"use client"
import React from 'react'
const Home = () => {
  return (
    <div className="w-full min-h-96 font-serif
        text-black font-small flex flex-col items-center justify-center text-center py-6 px-4 mx-auto rounded-md shadow-md max-w-screen-xl lg:py-12 lg:px-8">
      <h1 className='p-4 text-4xl  font-bold'>Client-side Data Fetching</h1>
    
      <p className='text-base sm:text-lg mt-2 font-medium '>
      Client-side data fetching is the process of retrieving data from an external source (like an API or server) on the client side (in the browser). This is often done using JavaScript, typically through functions like fetch or libraries like axios.
       Here’s a basic example using fetch in a React component.</p>

       <h1 className='p-4 text-4xl  font-bold'>Server-side Data Fetching</h1>
      
       <p className='text-base sm:text-lg mt-2 font-medium '>
       Server-side data fetching is the process of retrieving data from an external source (like an API or database) on the server side rather than on the client side. This approach is often used in web applications to pre-fetch data before rendering the page, which can improve performance and SEO.
        In the context of Next.js, there are specific functions used for server-side data fetching.  </p>


      {/* Button Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 font-serif">
        <a
          href="/client"
          className="bg-gray-200 text-black font-bold border border-gray-500 py-2 px-12 rounded-lg w-full sm:w-auto hover:bg-gray-300 text-center"
          role="button"
        >
          Client Side
        </a>
        <br />
        <br />
        <a
          href="/server"
          className="bg-gray-200 text-black  font-bold border border-gray-500 py-2 px-12 rounded-lg w-full sm:w-auto hover:bg-gray-300 text-center"
          role="button"
        >
          Server Side
        </a>
      </div>
    </div>
  )
}

export default Home;
