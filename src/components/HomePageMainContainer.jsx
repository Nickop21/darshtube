import React from 'react'
import HeadCategoryCrousal from './HeadCategoryCrousal'
import VideoCard from './VideoCard'

const HomePageMainContainer = () => {
  return (
    <div className='pl-64 pt-20'>
        <HeadCategoryCrousal/>
        <div className='flex flex-wrap justify-items-normal pt-3'>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>



        </div>

    </div>
  )
}

export default HomePageMainContainer