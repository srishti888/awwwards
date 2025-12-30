import {useRef, useState, useEffect} from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from './Button'
import {useWindowScroll} from 'react-use';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const navItems = ['Nexus', 'Contact', 'Vault', 'Prologue', 'About'];

const Navbar = () => {
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    
    //tracking user scroll
    const {y: currentScrollY} = useWindowScroll();
    useEffect(() => {
        // At very top
        if (currentScrollY === 0) {
          setIsNavVisible(true);
          navContainerRef.current.classList.remove('floating-nav');
        }
        // Scrolling DOWN
        else if (currentScrollY > lastScrollY) {
          setIsNavVisible(false);
        }
        // Scrolling UP
        else if (currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          navContainerRef.current.classList.add('floating-nav');
        }
      
        setLastScrollY(currentScrollY);
      }, [currentScrollY]);
      

    //gsap animation on scroll navbar
    useEffect(() => {
        if(navContainerRef.current) {
            gsap.to(navContainerRef.current, {
                y: isNavVisible ? 0 : -100,
                opacity: isNavVisible ? 1 : 0,
                duration : 0.2,
            })
        }
    }, [isNavVisible])

    //to allow us to play music onclick button
    const toggleAudioIndicator = () => {
        //toggle the state if on-> off if off->on
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    useEffect(() => {
        if(isAudioPlaying){
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying])

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all  duration-700 sm:inset-x-6" >
            <header className="absolute -translate-y-1/2 w-full top-1/2 ">
            <nav className="flex size-full items-center justify-between p-4 ">
                {/* //left side of navbar ie logo & product button*/}
                <div className="flex items-center gap-7 ">
                    <img 
                    src="./img/logo.png"
                    alt="logo"
                    className="w-10"
                    />

                    <Button id="product-button"
                    title="Products"
                    rightIcon={<TiLocationArrow/>}
                    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />         
                </div>

                {/* right side of navbar */}
                <div className="flex items-center h-full">
                    <div className="hidden md:block">
                        {navItems.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}className="nav-hover-btn ">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* //audio button */}
                    <button className="ml-10 flex items-center space-x-0.5 cursor-pointer" onClick={toggleAudioIndicator}>
                        <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
                        {[1,2,3,4].map((bar) => (
                            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}}/>
                        ))}
                    </button>
                </div>

            </nav>

            </header>
        </div>
        
    )
}
export default Navbar