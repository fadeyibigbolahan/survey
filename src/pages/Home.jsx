import React, { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import Header from "../components/Header";
import Question from "../components/Question";
import { questionList } from "../data/QuestionList";

const Home = () => {
  const [curQuestionId, setCurQuestionId] = useState(1);
  const [globalStep, setGlobalStep] = useState(1);
  const [curQuestion, setCurQuestion] = useState();
  const [allAnswers, setAllAnswers] = useState([]);
  const [showWarning, setShowWarning] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setGlobalStep(3);
  };

  const handleChildData = (data) => {
    setAllAnswers((prev) => [...prev, data]);
    console.log("Data from child:", data);
  };

  const checkIfIdExists = (id) => {
    return allAnswers.some((item) => item.id === id);
  };

  const nextFunc = () => {
    const isIdExists = checkIfIdExists(curQuestionId);
    if (isIdExists) {
      console.log("is id exist", isIdExists);
      setCurQuestionId((prev) => prev + 1);
    } else {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    console.log("all answers", allAnswers);
    const isIdExists = checkIfIdExists(curQuestionId);
    if (isIdExists) {
      const possibleAnswers = [
        "Mobile Home",
        "Yes",
        "Less than 2 years",
        "Excellent Condition",
        "Above Market Value (best for listing with a realtor)",
        "No, I want market value",
      ];
      const isMatch = allAnswers.some((item) =>
        possibleAnswers.includes(item.selectedAns)
      );
      if (isMatch) {
        setGlobalStep(2);
      }

      setCurQuestionId((prev) => prev + 1);
    }
    if (allAnswers.length === 12) {
      setGlobalStep(2);
    }
  }, [allAnswers]);

  const getObjectById = (id) => {
    return questionList.find((item) => item.id === id);
  };

  useEffect(() => {
    setCurQuestion(getObjectById(curQuestionId));
  }, [curQuestionId, curQuestion]);

  return (
    <div className="w-full h-full">
      <Header />
      {globalStep === 1 && (
        <div className="flex flex-col w-full justify-center items-center">
          <Question activeQ={curQuestion} sendDataToParent={handleChildData} />
          {showWarning && (
            <div className="flex flex-row justify-center items-center md:w-2/5 w-4/5 my-4">
              <p className="text-[#ff0000]">* Question is required</p>
            </div>
          )}
          {curQuestionId <= 12 && (
            <div
              // onClick={() => setCurQuestionId((prev) => prev + 1)}
              onClick={() => nextFunc()}
              className="flex flex-row justify-center items-center p-3 mb-5 md:w-2/5 w-4/5 rounded-md my-4 bg-blue-800 hover:bg-blue-500 cursor-pointer"
            >
              <p className="font-bold text-[18px] mr-2">NEXT</p>
              <GrLinkNext />
            </div>
          )}
        </div>
      )}
      {globalStep === 2 && (
        <div className="flex flex-col w-full justify-center items-center p-4">
          <form onSubmit={handleSubmit} className="md:w-1/2 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-2 text-white">First Name:</label>
                <input
                  className="flex flex-row justify-start items-center p-2 text-white w-full bg-black/60 rounded-md"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="mb-2 text-white">Last Name:</label>
                <input
                  className="flex flex-row justify-start items-center p-2 text-white w-full bg-black/60 rounded-md"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-2 text-white">Email:</label>
                <input
                  className="flex flex-row justify-start items-center p-2 text-white w-full bg-black/60 rounded-md"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="mb-2 text-white">Phone Number:</label>
                <input
                  className="flex flex-row justify-start items-center p-2 text-white w-full bg-black/60 rounded-md"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex flex-row justify-center items-center self-center p-3 mb-5 w-full rounded-md my-4 bg-blue-800 hover:bg-blue-500 cursor-pointer"
            >
              <p className="font-bold text-[18px] mr-2">SUBMIT</p>
              <GrLinkNext />
            </button>
          </form>
        </div>
      )}
      {globalStep === 3 && (
        <div className="flex flex-col w-full justify-center items-center p-4 bg-black/60">
          <h1 className="font-bold text-lg text-white text-center">
            Thank You for Completing Our Survey!
          </h1>
          <p className="text-white text-center w-full md:w-1/2 my-4">
            Thank you for taking the time to complete our survey. We truly value
            your feedback and insights, as they help us improve our services and
            better meet your expectations.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
