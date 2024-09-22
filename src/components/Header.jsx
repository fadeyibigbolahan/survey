import React from "react";
import capstone from "../images/capstone.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-5 mb-4">
      <img src={capstone} className="w-1/2 md:w-1/4" />
      <p className="font-bold text-white text-[20px] my-2 text-center">
        Get A Guaranteed Cash Offer That Won't Change.
      </p>
      <p className="text-white text-[14px] my-2 md:w-3/5 w-4/5 text-center">
        Sell Your House Fast For Cash. Zero Closing Costs, No Fees. You Choose
        the Closing Date. Sell As-Is Without Repairs or Cleaning. Take What You
        Want and Leave the Rest!
      </p>
    </div>
  );
};

export default Header;
