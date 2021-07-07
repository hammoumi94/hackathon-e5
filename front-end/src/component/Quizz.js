/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Element from './Element';
import questionService from '../services/question';


export default function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [score,setScore] = useState(0);
  useEffect(async () => {
    const questionsFromApi = await questionService.list();
    setQuestions(questionsFromApi);
  }, []);
  useEffect(()=>{
    console.log(score)

  },[score])
  return (
        <>
          {
            questions.map((question)=><Element question={question} score ={score} handleScoreChange={setScore}></Element>)
          }
        </>
  );
}
