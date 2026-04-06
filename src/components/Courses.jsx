import React from 'react'

function Courses() {
  return (
    <div className='flex bg-blue-600 '>
      <div className='w-140 p-10 pl-25 '>
<img src="qq.png" alt="" />
      </div>

      <div className='justify-between  p-30 '>

<p className='text-amber-300'>SELECTED COURSE</p>
<p className='text-white text-2xl font-bold w-50 pt-3'>People Taking Courses</p>
<p className='text-sm text-gray-300 font-light pt-3 w-80 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>

<div className='flex pt-5'>


<div className='text-center' >

    <p className='text-amber-300'>6,000</p>
    <p className='text-gray-200 text-sm'>People Views</p>
</div>
<div className='text-center'>

    <p className='text-amber-300 px-10'>4,000</p>
    <p className='text-gray-200 text-sm'>User</p>
</div>
<div className='text-center'>

    <p className='text-amber-300'>100</p>
    <p className='text-gray-200 text-sm'>Course</p>
</div>

</div>



      </div>


    </div>
  )
}

export default Courses
