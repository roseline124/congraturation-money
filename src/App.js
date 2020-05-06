import React, { useState } from 'react'
import { questions } from './constants'

function App() {
  const [seedMoney, setSeedMoney] = useState(5)
  const [questionNumber, setQuestionNumber] = useState(1)

  const question = questions[questionNumber]
  const handleClick = (answer) => {
    if (answer) {
      setSeedMoney(seedMoney + question.yesCost)
    }

    const questionNumber = answer ? question.yesQuestion : question.noQuestion
    setQuestionNumber(questionNumber)
  }

  return (
    <div>
      <p>{seedMoney}만 원</p>
      <p>
        Q{questionNumber}. {question.statement}
      </p>
      <button onClick={() => handleClick(true)}>yes</button>
      <button onClick={() => handleClick(false)}>no</button>
    </div>
  )
}

export default App
