import styles from "../style";
import Button from "./Button";
import Button2 from "./Download";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>View my Resume form</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       You can view my Resume form if you want to know about me.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    
    <Button2 />

      
      
    </div>
    
  </section>
);

export default CTA;
