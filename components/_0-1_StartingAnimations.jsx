import "../src/index.css"

// ASSETS
// import ellipseLogo from "../src/assets/svg/theX.svg"
import { useEffect } from "react";
import { gsap } from "gsap";
// import { Timeline } from "gsap/gsap-core";


export const StartingAnimations = () => {



    useEffect(() => {

        gsap.fromTo("#StartingAnimations", {

            scale: 1,
            opacity: 1,
        }, {
            scale: 50,
            opacity: 0,
            duration: 2,
            delay: 3,
        })
    }, [])

    return (
        <div id="StartingAnimations" className=" flex justify-center items-center">
            <svg width="259" height="263" viewBox="0 0 259 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="hello" d="M0.893499 29.8404V59.6808L49.9564 96.0961L98.5135 133.017L84.8569 143.133C77.2698 148.696 56.0261 164.881 37.3113 179.042L3.42252 205.342L1.90511 234.171L0.387695 263H18.5966C35.7939 263 36.2997 262.494 36.2997 243.781C36.8055 226.079 38.8288 223.55 81.3162 192.192C106.101 173.985 127.85 159.317 129.873 159.317C131.897 159.317 153.646 173.985 178.43 192.192C220.918 223.55 222.941 226.079 223.447 243.781C223.447 262.494 223.953 263 241.15 263H258.853V233.665L258.347 204.837L210.802 169.433C184.5 150.213 162.751 134.029 162.751 133.017C162.751 132.512 184.5 115.315 210.802 95.5904L258.853 59.6808V29.8404V0H241.15C223.953 0 223.447 0.505768 223.447 19.725C223.447 38.4384 221.424 40.9673 178.43 72.8308C154.152 91.0385 131.897 106.212 129.873 106.212C127.85 106.212 105.595 91.0385 81.3162 72.8308C38.3229 40.9673 36.2997 38.4384 36.2997 19.725C36.2997 0.505768 35.7939 0 18.5966 0H0.893499V29.8404Z" fill="none" />
            </svg>
        </div>
    );
}