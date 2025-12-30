import {useRef} from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'
import gsap from 'gsap'
const Story = () => {
    const frameRef = useRef('null')

    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0, rotateY: 0,
            ease: 'power1.inOut'
        })
    }

    const handleMouseMove = (e) => {
        // Tilt card based on how far the mouse is from its center.
        const {clientX, clientY} = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        // Convert mouse position → card position
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        // Find the card’s center for rotation
        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateX = ((y - centerY ) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut'
        })
        
    }

    return (
        <div id="story" className="min-h-dvh w-screen bg-black text-blue-50 ">
            <div className=" flex flex-col items-center size-full py-10 pb-24">
                <p className="font-general text-sm uppercase ">The multiversal IP world</p>

                <div className="relative size-full">
                {/* mix-blend-difference → color inversion effect */}
                    <AnimatedTitle
                    title="The Story of <br /> a hidden realm"
                    sectionId ="#story"
                    containerClass="mt-5 mix-blend-difference relative z-10"/>

                    {/* container fro the img */}
                    <div className=" story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img 
                                src="/img/entrance.webp"
                                alt="entrance"
                                className="object-contain"
                                ref={frameRef}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                onMouseMove={handleMouseMove}                               
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex flex-col h-full w-fit items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Where realm coverage, lies zentry and the oundless pillar of blah blah blah.Discover secrets and opportunities</p>

                        <Button id="realm-button"
                        title="discover prologue"
                        containerClass="mt-5 bg-white text-black"/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Story