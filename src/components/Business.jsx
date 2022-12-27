import { aboutme } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== aboutme.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="aboutme" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Who am I ?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      I am a graduated person with distinctions which I got my bachelor degree from Edinburgh Napier University, UK. 
      I have a great 
      English skill and also personal skill for work especially when I work with teams and staffs. 
      I also want to take part in dynamic and progressive company which can offer challenging job. 
      I have a strong vision for networking, hardware, software and also operating systems.  
      I have a passionate desire for job and you will also get a great learner and passionate staff for your job. You will never regret for hiring who have a great talent and passionate for every job position.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {aboutme.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
