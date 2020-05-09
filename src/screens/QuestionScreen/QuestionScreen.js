import React, { useState } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import { questions } from '../../constants'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
  },
  linearProgress: {
    width: '50%',
  },
  seedMoneyWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seedMoneyIndex: {
    marginRight: 20,
    color: theme.palette.primary.main,
  },
  question: {
    marginTop: 30,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  yesButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginRight: 10,
  },
  noButton: {
    backgroundColor: theme.palette.info.main,
    color: 'white',
  },
}))

function QuestionScreen() {
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
    <Box className={classes.root}>
      <Box className={classes.seedMoneyWrapper}>
        <Typography className={classes.seedMoneyIndex}>
          {seedMoney}만 원
        </Typography>
        <LinearProgress
          color="primary"
          className={classes.linearProgress}
          variant="determinate"
          value={seedMoney * 10}
        />
      </Box>

      <Typography className={classes.question}>
        Q{questionNumber}. {question.statement}
      </Typography>

      <Box className={classes.buttonWrapper}>
        <Button onClick={() => handleClick(true)} className={classes.yesButton}>
          yes
        </Button>
        <Button onClick={() => handleClick(false)} className={classes.noButton}>
          no
        </Button>
      </Box>
    </Box>
  )
}

export default QuestionScreen
