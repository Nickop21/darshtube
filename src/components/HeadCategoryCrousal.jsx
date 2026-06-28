import React from 'react'

const HeadCategoryCrousal = () => {
  const categoryData=["All","Music","Love songs","Motivation","News","Javascript","coding","Gaming","Cricket","Live"]
  return (
    <div className='flex gap-2 pb-4 text-gray-200 '>
      <div className='flex gap-3 overflow-scroll scrollbar-none'>
        {
          categoryData?.map((data)=>(

            <span className='p-2 bg-gray-100 text-black/50 font-bold text-sm rounded whitespace-nowrap' key={data}>{data}</span>
          ))
        }

      
      </div>


    </div>
  )
}

export default HeadCategoryCrousal