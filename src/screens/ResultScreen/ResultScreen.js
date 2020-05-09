import React from 'react'
import queryString from 'query-string'

import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ResultType } from '../../constants'

const useStyles = makeStyles(() => ({
  result: {
    marginRight: 20,
  },
  resultType: {
    fontWeight: 500,
    fontSize: 40,
  },
}))

const ResultScreen = ({ location }) => {
  const classes = useStyles()
  const result = queryString.parse(location.search)

  console.log(result)
  return (
    <Box display="flex" alignItems="center">
      <Typography className={classes.result}>결과: </Typography>
      <Typography className={classes.resultType} color="primary">
        {result.money}만 원 /{' '}
        {result.type === ResultType.ATTEND ? '필참!' : '봉투만 전해도 OK!'}
      </Typography>
    </Box>
  )
}

export default ResultScreen
