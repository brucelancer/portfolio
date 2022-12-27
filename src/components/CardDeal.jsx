import { card,tunnel,cob1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        TUNNEL <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       TUNNEL is a social media website and I created it by using Google API, React, TypeScript, Tailwind and JavaScript. You
       can upload a videos, real time comments, likes and replies. It had a search engine and also own profile for each users but I 
       did not uploaded yet and I think it will come completely ASAP. 
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={cob1} alt="billing" className="w-[90%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
