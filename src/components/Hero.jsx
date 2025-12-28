import React from 'react'
import {useState} from 'react'
import {useRef } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;

  //useRef to target dom element to play video inside specific div
const currentVideoRef = useRef(null);
const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  }

  // useGSAP(() => {
  //   if(hasClicked){
  //     gsap.set('#next-video', {visibility : 'visible'});

  //     gsap.to('#next-video', {
  //       transformOrigin: 'center center',
  //       scale: 1,
  //       width: '100%',
  //       height: '100%',
  //       duration: 1,
  //       ease: 'power1.inOut',
  //       onStart: () => nextVideoRef.current.play()
  //     })

  //     gsap.from('#current-video', {
  //       transformOrigin: 'center center',
  //       scale: 0,
  //       duration: 1.5,
  //       ease: 'power1.inOut',
  //     })
  //   }
  // }, { dependencies: [currentIndex], revertOnUpdate: true })

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden border-black border-2 ">
      <div id="video-frame" className="relative z-10 h-dvh w-screen rounded-lg overflow-hidden bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer rounded-lg">
            <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video 
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center "
              onLoadedData={handleVideoLoad}/>
            </div>
          </div>

          <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible size-64 objext-cover object-center z-20"
          onLoadedData={handleVideoLoad}/>

          <video
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex) }
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full objext-cover objext-center"
          onLoadedData={handleVideoLoad}
          />

        </div>

        {/* gaming texts */}
        <h1 className="hero-heading special-font absolute bottom-5 z-40 text-blue-100 text-sm ">GAMing</h1>
        {/* redefine texts */}
        <div className="absolute z-40 border-red border-4">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">REDEFINE</h1>
            <p className="text-blue-100 font-robert-regular mb-3">Enter the metagame layer <br/> Unleash the Play Economy</p>
            <Button 
            id="watch-trailer" 
            title="watch trailer" 
            leftIcon={<TiLocationArrow/>}
            containerClass="bg-yellow-300 flex-center gap-1" />
          </div>
        </div>
        </div>

        {/* a//after pg scroll */}
        <h1 className="hero-heading special-font absolute bottom-5 z-40 text-black text-sm ">GAMing</h1>

        </div>
  )
}

export default Hero