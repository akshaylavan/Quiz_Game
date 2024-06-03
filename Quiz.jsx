import React, { useEffect, useState } from "react";
import questionsData from "./Question.json";

export const Quiz = () => {
  const [currentQueston, setCurrentQueston] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);

  const handleAnswerClick=(selectedOption)=>{
    if(selectedOption === questionsData[currentQueston].correctOption)
        {
            setScore((preScore)=>preScore+1);
        }
    if(currentQueston < questionsData.length -1)
        {
            setCurrentQueston((preQuestion)=>preQuestion + 1)
            setTimer(15)
        }
        else
        {
            setShowScore(true)
        }
  }
  useEffect(()=>{ 
    let interval;
    if(timer >0 && !showScore){
        interval=setInterval(()=>{
            setTimer((preTimer)=>preTimer-1)
        },1000)
    }else{
        clearInterval(interval)
        setShowScore(true)
    }
    return ()=> clearInterval(interval)
  },[timer,showScore])
  return (
    <>
      <div className="bg-blue-200">
        <section className="">
          <div className="grid place-items-center h-screen text-center ">
            <div className="p-5 bg-white w-auto h-auto rounded-md shadow-blue-800 shadow-2xl">
              {showScore ? (
                <div className="">
                  <h1 className="text-2xl font-nano font-medium m-3">
                    Your Score:{score}/{questionsData.length}
                  </h1>
                  <button className="bg-red-500 hover:bg-red-700 transform hover:scale-110 transition-transform duration-200 text-white px-3 py-2 text-2xl font-nano rounded-md m-3 select-none" onClick={()=>{
                    setCurrentQueston(0)
                    setScore(0)
                    setShowScore(false)
                    setTimer(15)
                  }}>
                    Restart
                  </button>
                </div>
              ) : (
                <div>
                  <h1 className="font-post text-blue-600 text-2xl pb-4">
                    Question {currentQueston + 1}
                  </h1>
                  <p
                    className="text-3xl font-ubuntu font-medium select-none
             "
                  >
                    {questionsData[currentQueston].question}
                  </p>
                  {questionsData[currentQueston].options.map(
                    (options, index) => (
                      <button
                        className="bg-blue-500 cursor-pointer px-3 py-2 rounded-md text-white font-medium m-5 font-ubuntu text-2xl hover:bg-blue-700 transform hover:scale-110 transition-transform duration-200 shadow-md shadow-blue-300 select-none "
                        key={index} onClick={()=>handleAnswerClick(options)}
                      >
                        {options}
                      </button>
                    )
                  )}
                  <p className="mt-4 font-medium font-nano text-2xl hover:scale-100 text-gray-500">
                    Time Left: <span>{timer}S</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
