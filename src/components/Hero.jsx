import styles from "../style";
import { discount, robot, pp, phone } from "../assets";
import GetStarted from "./GetStarted";
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-0`}>
            Portfolio
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            Zwe Khant Aung <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[36px] text-[20px]">IT Technician,</span>{" "}
            <span className="text-gradient ss:text-[36px] text-[20px]">Web Developer</span>{" "}
          </h1>
         
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        
        </h1>
        <p className={`${styles.paragraph} max-w-[570px] mt-4`}>
        <SocialIcon url="https://mail.google.com/" /> &nbsp;Zwekhantko2019@gmail.com <br className="sm:hidden" /><br className="sm:hidden" />
        
        <SocialIcon className="ml-10" url="https://www.linkedin.com/in/zwe-khant-aung-28a63a257/" /> &nbsp;Zwe Khat Aung
        {/* <br /><br />
         <span  className="flex" ><img style={{ borderRadius: 100}} src={phone} /> 
         <span className="mt-0">&nbsp;&nbsp;09-441998248</span> </span> */}
        </p>
      </div>

      <div  className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative borderRadius: 30px`}>
        <img style={{ borderRadius: 100}} src={pp} alt="billing" className=" w-[80%] h-[90%] relative z-[5] " />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
