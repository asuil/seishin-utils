import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BRIGHTRED } from '../constants/colors';
import Box from './Box'

const Content = () => {
  return (
    <Box bgcolor={BRIGHTRED}>
      <Switch>
        <Route path="/podcast">podcast owo</Route>
        <Route path="/tardes-de-anime">tardes awa</Route>
        <Route path="/tops-10+1">tops uwu</Route>
        <Route path="/">elige</Route>
      </Switch>
    </Box>
  )
};

export default Content;