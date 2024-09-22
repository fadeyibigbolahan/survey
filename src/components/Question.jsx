import React, { useState, useRef } from "react";

const Question = ({ activeQ, sendDataToParent }) => {
  // const [selectedAnswer, setSelectedAnswer] = useState("");
  const selectedAnswer = useRef("");

  const sendData = (ans) => {
    const answeredQ = activeQ?.q;
    selectedAnswer.current = ans;
    const objAns = {
      id: activeQ?.id,
      answeredQ,
      selectedAns: selectedAnswer?.current,
    };
    sendDataToParent(objAns); // Send data to parent
    console.log("Selected answer,", objAns);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-row justify-start items-center p-5 w-4/5 bg-black/60 rounded-md border-l-[5px] border-l-blue-400">
        <div className="flex justify-center items-center border-2 border-white rounded-full w-[40px] h-[40px]">
          <p className="text-white">{activeQ?.id}</p>
        </div>
        <p className="text-white ml-4 w-4/5">{activeQ?.q}</p>
      </div>
      <div className="w-4/5 my-4">
        <div className="flex flex-row flex-wrap justify-between items-center w-full">
          {activeQ?.opt1 && (
            <div
              onClick={() => sendData(activeQ?.opt1)}
              className="flex flex-row justify-start cursor-pointer items-center p-3 w-full mt-4 md:w-[48%] bg-black/60 hover:bg-black/80 rounded-md border-l-[5px] border-l-blue-400"
            >
              <div className="flex justify-center items-center border-2 border-white rounded-full w-[30px] h-[30px]">
                <p className="text-white">a</p>
              </div>
              <p className="text-white ml-4 w-4/5">{activeQ?.opt1}</p>
            </div>
          )}
          {activeQ?.opt2 && (
            <div
              onClick={() => sendData(activeQ?.opt2)}
              className="flex flex-row justify-start cursor-pointer items-center p-3 w-full mt-4 md:w-[48%] bg-black/60 hover:bg-black/80 rounded-md border-l-[5px] border-l-blue-400"
            >
              <div className="flex justify-center items-center border-2 border-white rounded-full w-[30px] h-[30px]">
                <p className="text-white">b</p>
              </div>
              <p className="text-white ml-4 w-4/5">{activeQ?.opt2}</p>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center w-full">
          {activeQ?.opt3 && (
            <div
              onClick={() => sendData(activeQ?.opt3)}
              className="flex flex-row justify-start items-center cursor-pointer p-3 w-full mt-4 md:w-[48%] bg-black/60 hover:bg-black/80 rounded-md border-l-[5px] border-l-blue-400"
            >
              <div className="flex justify-center items-center border-2 border-white rounded-full w-[30px] h-[30px]">
                <p className="text-white">c</p>
              </div>
              <p className="text-white ml-4 w-4/5">{activeQ?.opt3}</p>
            </div>
          )}
          {activeQ?.opt4 && (
            <div
              onClick={() => sendData(activeQ?.opt4)}
              className="flex flex-row justify-start items-center cursor-pointer p-3 w-full mt-4 md:w-[48%] bg-black/60 hover:bg-black/80 rounded-md border-l-[5px] border-l-blue-400"
            >
              <div className="flex justify-center items-center border-2 border-white rounded-full w-[30px] h-[30px]">
                <p className="text-white">d</p>
              </div>
              <p className="text-white ml-4 w-4/5">{activeQ?.opt4}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
