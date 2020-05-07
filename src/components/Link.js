import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    '& > a': {
      textDecoration: 'none',
    },
  },
}))

const Link = (props) => {
  const classes = useStyles()
  const { className, ...routerLinkProps } = props
  return (
    <Box className={clsx(classes.root, className)}>
      <RouterLink {...routerLinkProps}>{props.children}</RouterLink>
    </Box>
  )
}

export default Link

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}
