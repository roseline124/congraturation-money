import React, { useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { questions } from './constants'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 30,
    height: '100vh',
    border: '2px solid blue',
    // backgroundColor: theme.palette.primary.main,
  },
}))

function App() {
  const classes = useStyles()
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
    <Container maxWidth="lg" className={classes.container}>
      <Typography>{seedMoney}만 원</Typography>
      <Typography>
        Q{questionNumber}. {question.statement}
      </Typography>
      <button onClick={() => handleClick(true)}>yes</button>
      <button onClick={() => handleClick(false)}>no</button>
    </Container>
  )
}

export default App
