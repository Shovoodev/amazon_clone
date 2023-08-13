import React from 'react';
import { Carousel , CarouselCategory , CarouselProduct ,HomePageCard } from "./index";

function HomePage() {
  return (
    <div class="bg-amazonclone-background">
      <div className='min-w-[100px] max-w-[1500px] m-auto'>
        <Carousel/>
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomePageCard title={"Analog Discovery Pro ADP3250"}
          img={"https://m.media-amazon.com/images/I/31FjFiD3IGL._SY445_SX342_QL70_ML2_.jpg"}
          link={"link"}/>
          <HomePageCard title={"RIGOL DG821 Funzione/Generatore"}
          img={"https://m.media-amazon.com/images/I/71Cnwc3CPkS.__AC_SY300_SX300_QL70_ML2_.jpg"}
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
        <CarouselProduct/>
        <CarouselCategory/>
        <div className='h-[200px]'>
          <img className='h-[100%] m-auto' src='../images/banner_image.jpg' />
        </div>
      </div>
    </div>
  )
}

export default HomePage ;