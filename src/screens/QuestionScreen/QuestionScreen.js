import React, { useState } from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import { Questions, ResultType } from '../../constants'
import Link from '../../components/Link'

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
    marginTop: 50,
    fontSize: 25,
  },
  buttonWrapper: {
    marginTop: 50,
  },
  yesButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginRight: 10,
  },
  noButton: {
    color: 'white',
  },
  resultButton: {
    padding: '10px 15px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}))

function QuestionScreen() {
  const classes = useStyles()
  const [seedMoney, setSeedMoney] = useState(5)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const question = Questions[currentQuestion]
  const isQuestion =
    currentQuestion !== ResultType.ENVELOPE &&
    currentQuestion !== ResultType.ATTEND

  const handleClick = (answer) => {
    if (answer) {
      setSeedMoney(seedMoney + question.yesCost)
    }

    const currentQuestion = answer ? question.yesQuestion : question.noQuestion
    setCurrentQuestion(currentQuestion)
  }

  return (
    <Box className={classes.root}>
      {isQuestion ? (
        <>
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
            Q{currentQuestion}. {question.statement}
          </Typography>
        </>
      ) : null}

      <Box className={classes.buttonWrapper}>
        {isQuestion ? (
          <>
            <Button
              onClick={() => handleClick(true)}
              className={classes.yesButton}
              color="primary"
              variant="contained"
              disableElevation
            >
              yes
            </Button>
            <Button
              onClick={() => handleClick(false)}
              className={classes.noButton}
              color="secondary"
              variant="contained"
              disableElevation
            >
              no
            </Button>
          </>
        ) : (
          <Link to={`/result?type=${currentQuestion}&money=${seedMoney}`}>
            <Button
              className={classes.resultButton}
              variant="contained"
              disableElevation
            >
              결과 확인
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default QuestionScreen
