import aboutMeArt from "@assets/images/about-me/about-me-art.webp";
import tape from "@assets/images/about-me/tape.png";
import cv from "@assets/docs/eva_cv.pdf";

function AboutMePage() {

    return (
        <main className="
            flex
            flex-col
            gap-5
            justify-center 
            items-center
            p-5
            mb-3 
            w-full 
            xl:h-[848px]
            xl:flex-row
            xl:gap-0
            xl:relative 
            xl:bg-[url('/src/assets/images/about-me/about-me-background.webp')] 
        ">
            <div className="
                flex 
                flex-col
                relative
                bg-[#fcc3c9]/85 
                border-6 
                border-[#e19a9f] 
                p-10
                shadow-md 
                w-full
                h-fit
                xl:w-1/3
            ">
                <h1 className="
                    font-[lulo]
                    text-[var(--font-active-color)] 
                    text-3xl
                    text-center
                    text-shadow-lg
                    md:text-5xl 
                ">
                    ABOUT ME
                </h1>
                <div className="
                    flex 
                    flex-col
                    gap-8 
                    font-[bai] 
                    mt-10 
                    text-[#9a0f48] 
                    text-justify 
                    text-lg
                    md:text-xl
                ">
                    <p>
                        Greetings, my name is Eva, although in social networks I'm called Moonderfal, Moon, etc. A nickname given to me by a close friend.
                    </p>
                    <p>
                        I was born in a small town in Spain, where I grew up until the end of my adolescence. Right now I'm studying a higher degree in 3D animation, games and interactive environments. Although as a child I was very good at maths and science, my hobby has always been drawing.
                    </p>
                    <p>
                        I usually do some orders for people who like my art, but I'm also integrating little by little to the 3D world, and so far, I love it!
                    </p>
                    <p>
                        I hope you like my portfolio, there is my downloadable CV.
                    </p>
                    <a className="font-bold text-2xl text-center hover:underline md:text-3xl" href={cv} download="Eva_Gongora_Fuentes_CV.pdf">
                        Eva's CV (click to download)
                    </a>
                </div>
                <picture className="hidden xl:block xl:absolute xl:-top-12 xl:left-70">
                    <img src={tape} alt="Tape"/>
                </picture>
            </div>

            <picture className="xl:absolute xl:top-3 xl:right-10">
                <img src={aboutMeArt} alt="Eva as art"/>
            </picture>
        </main>
    );

}

export default AboutMePage;