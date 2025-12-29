import React, { useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'

const App = () => {
  // const [currentIndex, setCurrentIndex] = useState(1);
  // const [hasClicked, sethasClicked] = useState(false);
  // const [isLoading, setisLoading] = useState(true);
  // const [loadedVideos, setloadedVideos] = useState(0);

  // const totalVideos = 4;
  // const nextVdRef = useRef(null); 

  // const handleMinVdClick =() =>{
  //   sethasClicked(true);
  //   setCurrentIndex((prevIndex) => prevIndex + 1);
  // }

  // // const getVdSrc = (index) => f

  // return (
  //   <main className='relative w-screen min-h-screen overflow-x-hidden'>
  //     <div id='video-frame' className='border border-amber-500 relative z-10 overflow-hidden h-dvh w-screen rounded-lg bg-blue-75'>
  //       <div className='border-2 border-emerald-600'>
  //         <div className='border-2 border-gray-950 mask-clip-path  absolute-center size-64 absolute z-20 cursor-pointer overflow-hidden rounded-lg'>
  //           <div onClick={handleMinVdClick} className=''>
  //             <video
  //             ref = {nextVdRef}/>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Hero/>
  //     </main>
  // )

  return (
    <main className='relative w-screen min-h-screen overflow-x-hidden'>
      <Hero/>
      <About/>
      <Navbar/>
      <Features/>
    </main>
  )
}

export default App


