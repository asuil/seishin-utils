import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Box from './components/Box';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';
import Text from './components/Text';
import { BGGRAY, WHITE } from './constants/colors';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Router basename="seishin-utils">
      <Box bgcolor={BGGRAY}>
        <Text color={WHITE} text="Header"/>
        <NavigationBar />
        <Content />
        <Text color={WHITE} text="Footer"/>
      </Box>
    </Router>
  );
}

export default App;
