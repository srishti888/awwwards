import react from 'react'
import gsap from 'gsap'
import {useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })
    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mt-36 flex flex-col items-center">
                <h2 className="font-general uppercase  text-center md:text-[10px]">Welcome baddies!</h2>

                <div className="text-center mt-5 text-4xl uppercase md:text-[6rem]">Disc<b>o</b>ver the world's <br></br> l<b>a</b>rgest Shared Adventure</div>

                <div className="bout-subtext">
                    <p>the game of games begins! Your life, now an MMORPG</p>
                    <p>get united to experience the show on endless platforms! </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                    alt="bg"
                    src="img/about.webp"
                    className="absolute top-0 left-0 size-full object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default About