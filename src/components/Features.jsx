import {TiLocationArrow} from 'react-icons/ti'

const BentoCard = ({src, title, description, isComingSoon}) => {
    return (
        <div className="relative size-full">
            <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"/>

            <div className="relative flex flex-col size-full p-5 text-blue-50 justify-between z-10 ">
                <div className="">
                    <h1 className="bento-title">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
            
            </div>

            
    )
}
const Features = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="border-white border-4">
                <div className="border-white border-4 px-6 py-32">
                    <p className=" font-circular-web text-lg text-blue-50 ">Into the MetaGame layer</p>
                
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">Step into the shinobi world where legends are born.
                Master jutsu, forge bonds, and carve your ninja way.</p>
                </div>
            </div>


            {/* //start of bento grid */}
            <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md">
                <BentoCard
                src="videos/feature-1.mp4"
                title="Madara Uchiha"
                description="A legend who challenged the entire shinobi world.
Madara believes peace can only be forged through absolute power."
                isComingSoon
                />
            </div>

            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 px-6">
                <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                    src="videos/feature-2.mp4"
                    title={<>Sakura Haruno</>}
                    description="Once standing behind, now standing strong. Sakura's resolve turns pain into unmatched strength."/>
                </div>

                <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                    src="videos/feature-3.mp4"
                    title={<>pain</>}
                    description="A god born from endless suffering.
Pain teaches the world the true meaning of loss."/>
                </div>

                <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                    src="videos/feature-4.mp4"
                    title={<>Kakashi Hatake</>}
                    description="A genius burdened by memories and regret. Kakashi teaches that those who abandon friends are worse than scum."/>
                </div>

                <div className="bento-tilt_2 flex size-full flex-coljustify-between bg-violet-700 p-5">
                    <h1 className="bento-title special-font max-w-64">MORE COMING SOON</h1>

                    <TiLocationArrow className="m-5 scale-[5] self-end"/>
                </div>
            </div>

            <div className="bento-titl_2">
                <video 
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
                />

            </div>
        </div>
    )
}
export default Features;