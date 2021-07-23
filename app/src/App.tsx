import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Box from './components/Box';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';
import Text from './components/Text';
import { BGGRAY, BRIGHTRED, WHITE } from './constants/colors';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Router basename="seishin-utils">
      <Box bgcolor={BGGRAY} flex col h="100vh">
        <Text color={WHITE} text="Header"/>
        <NavigationBar />
        <Box flexGrow={1} bgcolor={BRIGHTRED} flex alignItems="center" justifyContent="center">
          <Content />
        </Box>
        <Text color={WHITE} text="Footer"/>
      </Box>
    </Router>
  );
}

export default App;
