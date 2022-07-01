import React, { useState, useContext } from 'react'
import { Questions } from '../helper/QuestionBank'
import { QuizContext } from '../helper/Context'
import '../App.css'

function Quiz() {

  const [currnQuestion, setCurrnQuestion] = useState(0)

  const [optionChosen, setOptionChosen] = useState("")

  const { score, setScore, setgameState } = useContext(QuizContext)

  const nextQuestion = () => {
    if (Questions[currnQuestion].asnwer == optionChosen) {
      setScore(score + 1)
    }
    setCurrnQuestion(currnQuestion + 1)
  }

  const finishQuiz = () => {
    if (Questions[currnQuestion].asnwer == optionChosen) {
      setScore(score + 1)
    }
    setgameState('end screen')
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[currnQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currnQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currnQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currnQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currnQuestion].optionD}
        </button>
      </div>
      {currnQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}

    </div>
  )
}

export default Quiz