import "../src/index.css"

// ASSETS
import commingSoonLogo from "../src/assets/svg/tecxaroLogo.svg"
import { useEffect } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";



export const CommingSoon = () => {

    gsap.registerPlugin(Timeline);

    useEffect(() => {
        const t1 = gsap.timeline();
        t1.fromTo("#CommingSoon",{

            y:100,
        },{
            y:0,
            duration:1,
            ease:"elastic",
            delay:4,
        })

    },[])


    return(
        <div id="CommingSoon_1_" className="commingSoon flex flex-col justify-center items-center px-4">


            <div>
                <img src={commingSoonLogo} alt="" />
            </div>

            <div id="CommingSoon" className=" font-poppins text-3xl font-black bg-gradient-to-r from-[#FF4536] to-[#FF8F4D]
            px-2 text-white fixed bottom-4 pt-1
            sm:text-4xl
            md:text-5xl 
            lg:text-6xl
            xl:text-7xl
            2xl:text-7xl">
                <p>COMING VERY SOON</p>
            </div>
        </div>
    );
}