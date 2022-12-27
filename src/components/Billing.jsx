import { apple, bill, google,tunnel,eancro } from "../assets";
import styles, { layout } from "../style";
import Button2 from "./Button";

const Billing = () => (
  <section id="projects" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={eancro} alt="billing" className="w-[40%] h-[60%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        EANCRO TV <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Eancro TV is a project that I lead and created with my teams. Eancro TV is a streaming website that you can 
       stream your videos, live-comments and screen share with real time. I mostly used with Google API, Agora SDK, HTML5, CSS, PHP, Django and JavaScript.
       You can check by cliking "Get Started" button.
      </p>
      <Button2 styles={`mt-10`} />

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
