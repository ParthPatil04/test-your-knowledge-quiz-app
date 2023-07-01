import React, { useContext } from 'react'
import { QuizContextConst } from '../Context/QuizContext'

const Result = () => {
  const ExitHandler = () => {
    setExit(false)
    setStart(false)
    setCorrect(0)
  }
  const {correct, setExit, setStart, quizzes, setCorrect} = useContext(QuizContextConst)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <div className='w-[40%]  border shadow-lg rounded-md overflow-hidden text-center'>
           <h2 className='text-3xl p-3'>{correct} are correct out of {quizzes.length}</h2>
           <button onClick={ExitHandler} className='w-[30%] mt-3 mb-2 hover:bg-violet-600 rounded-3xl border border-orange-500 p-3 text-xl'>Play Again!</button>
    </div>
    </div>
  )
}

export default Result