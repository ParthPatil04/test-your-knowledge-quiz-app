import React, { useContext, useState } from 'react'
import { QuizContextConst } from '../Context/QuizContext'

const Quiz = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Box current={current} nextHandler={setCurrent}/>
    </div>
  )
}

const Box = ({current, nextHandler}) => {
  const {quizzes, correct, setCorrect, setExit} = useContext(QuizContextConst)
  const [ans, setAns] = useState("")

  const saveNextHandler = () => {
    if(quizzes[current].correct === ans){
      setCorrect(correct + 1)
    }
    setAns("")
    if((current + 1) === quizzes.length){
      console.log("You have reached the end of quiz!")
      setExit(true)
    } else{
      nextHandler(current+1)
    }
  }
 // console.log(quizzes[current])
  return (
    <div className='w-[40%]  border shadow-lg rounded-md overflow-hidden'>
      <div className='p-2 text-2xl break-words'>{current + 1}) {quizzes[current].question}</div>
      <div className='grid grid-cols-2 mt-3'>
        <div onClick={() => setAns("a")} className={`p-2 border ${ans === "a" && 'bg-blue-400 text-white'} hover:bg-blue-400 cursor-pointer hover:text-white duration-200`}>{quizzes[current].a}</div>
        <div onClick={() => setAns("b")} className={`p-2 border ${ans === "b" && 'bg-blue-400 text-white'} hover:bg-blue-400 cursor-pointer hover:text-white duration-200`}>{quizzes[current].b}</div>
        <div onClick={() => setAns("c")} className={`p-2 border ${ans === "c" && 'bg-blue-400 text-white'} hover:bg-blue-400 cursor-pointer hover:text-white duration-200`}>{quizzes[current].c}</div>
        <div onClick={() => setAns("d")} className={`p-2 border ${ans === "d" && 'bg-blue-400 text-white'} hover:bg-blue-400 cursor-pointer hover:text-white duration-200`}>{quizzes[current].d}</div>
      </div>
      <div className='flex justify-between'>
       <div className='h-[30px] bg-orange-700 px-3 text-white cursor-pointer' onClick={() => setAns("")}>Reset</div>
       <div className='h-[30px] bg-green-700 px-3 text-white cursor-pointer' onClick={saveNextHandler}>Save & Next</div>
       <div className='h-[30px] bg-red-700 px-3 text-white cursor-pointer' onClick={() => setExit(true)}>Exit</div>
      </div>
    </div>
  )
}

export default Quiz