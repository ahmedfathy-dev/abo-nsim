import React from 'react'
function Blog() {
  return (

    
    <div className='flex items-center gap-8 border-b px-10 border-gray-100'>
      <img className='w-40 p-5 pl-10'  src='sss.png'/>

<div className='flex pl-25'>

      <ul className='flex gap-10'>
         <li>Home</li>
      <li className=' text-gray-500'>Course</li>
      <li className=' text-gray-500'>About Us</li>
       <li className=' text-gray-500'>Article</li>
      <li className=' text-gray-500'>Contact</li>
      </ul>

</div>

      <button className='rounded-lg border px-10 p-2 text-blue-600 hover:text-blue-300 border-blue-600 transition'>Log in</button>
      <button className='rounded-lg border px-10 p-2 bg-blue-600 text-white'>Register</button>
    </div>
  )
}

export default Blog

