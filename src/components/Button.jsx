import React from "react";

const Button = ({ styles }) => (
  <a href="http://eancrotv.epizy.com/lobby.html" target="_blank"
					rel="noreferrer">
            <button type="button" className={`py-4 px-10 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Get Started</button>
					
				</a>
);
const Button2 = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Show
  </button>
);



export default Button;




