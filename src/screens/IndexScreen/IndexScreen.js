import React from 'react'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Link from '../../components/Link'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 50,
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  seedMoney: {
    fontSize: 40,
    fontWeight: 700,
    color: 'white',
  },
  startButton: {
    marginTop: 50,
    padding: '10px 15px',
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    textDecoration: 'none',
  },
}))

const IndexScreen = () => {
  const classes = useStyles()

  return (
    <Box display="block" textAlign="center">
      <Typography className={classes.title}>축의금, 얼마 내야할까?</Typography>
      <Link to="/question" className={classes.link}>
        <Button
          className={classes.startButton}
          variant="contained"
          disableElevation
        >
          <Typography className={classes.seedMoney}>시작: 5만 원</Typography>
        </Button>
      </Link>
    </Box>
  )
}

export default IndexScreen
