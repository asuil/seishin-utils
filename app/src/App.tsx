import React from 'react';
import Box from './components/Box';
import PosterText from './components/PosterText';
import { BGGRAY } from './constants/colors';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Box bgcolor={BGGRAY}>
      <PosterText text="hola" size={60} />
    </Box>
  );
}

export default App;
