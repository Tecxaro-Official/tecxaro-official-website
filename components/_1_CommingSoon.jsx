import "../src/index.css"

// ASSETS
import commingSoonLogo from "../src/assets/svg/tecxaroLogo.svg"



export const CommingSoon = () => {



    return(
        <div className="commingSoon flex flex-col justify-center items-center px-4">


            <div>
                <img src={commingSoonLogo} alt="" />
            </div>

            <div className=" font-poppins text-3xl font-black bg-gradient-to-r from-[#FF4536] to-[#FF8F4D]
            px-2 text-white absolute bottom-4 pt-1
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