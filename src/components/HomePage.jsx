import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'

function HomePage() {
  return (
    <div class="bg-amazonclone-background">
      <div className='min-w-[100px] max-w-[1500px] m-auto'>
        test
        <Carousel/>
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_8.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_2.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_7.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_3.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_1.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_4.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_5.jpg"}
          link={"link"}/>
          <HomePageCard title={"the title "}
          img={"../images/home_grid_6.jpg"}
          link={"link"}/>
          <div className='m-3 pt-8'>
            <img className='xl:hidden' src={"../images/banner_image_2.jpg"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage ;