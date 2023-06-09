import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

import logoImage from './logo.png'

// @ts-ignore
import createGuest  from 'cross-domain-storage/guest'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  title: {
    textAlign: 'center',
  },
}))

const Landing: React.FunctionComponent = () => {
  const classes = useStyles()

  const history = useHistory()

  return (
    <Grid container>
      <Grid className={classes.root} container direction="column" justify="center" alignItems="center">
        <Box m={2}>
          <img src={logoImage} width={224} height={224} alt="logo" />
        </Box>
        <Box m={2}>
          <Link underline="none" color="inherit" href="https://github.com/dbroadhurst/aws-cognito-react">
            <Grid container direction="row" justify="center" alignItems="center">
              <Box mr={3}>
                <GitHubIcon fontSize="large" />
              </Box>
              <Typography className={classes.title} variant="h3">
                AWS Cognito Starter
              </Typography>
            </Grid>
          </Link>
        </Box>
        <Box m={2}>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Landing
