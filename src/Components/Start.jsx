import React, { useContext } from 'react'
import { QuizContextConst } from '../Context/QuizContext'

const Start = () => {
  const {setStart} = useContext(QuizContextConst)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <button onClick={() => setStart(true)} className='w-[100px] hover:bg-violet-600 rounded-3xl border border-orange-500 p-3 text-xl'>Start</button>
    </div>
  )
}

export default Start