import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import IndexScreen from './screens/IndexScreen'
import QuestionScreen from './screens/QuestionScreen'
import ResultScreen from './screens/ResultScreen'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: '100%',
  },
  container: {
    marginTop: 30,
    height: 'calc(100vh - 120px)',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper className={classes.root} elevation={3}>
        <Router>
          <Route path="/" exact component={IndexScreen} />
          <Route path="/question" exact component={QuestionScreen} />
          <Route path="/result" component={ResultScreen} />
        </Router>
      </Paper>
    </Container>
  )
}

export default App
