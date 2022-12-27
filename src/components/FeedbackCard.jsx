import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex background:white justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
   

    <div className="flex flex-row">
      <img src={img} className="w-[100%] h-[100%] mt-5 " style={{ borderRadius: 60}} />
      
    </div>
  </div>
);


export default FeedbackCard;
