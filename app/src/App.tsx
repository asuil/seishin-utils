import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Content from './components/Content';
import NavigationBar from './components/NavigationBar';
import { BGGRAY, BRIGHTRED, WHITE } from './constants/colors';

const App = () => (
  <Router basename="seishin-utils">
    <Box color={WHITE} bgcolor={BGGRAY} display="flex" flexDirection="column" height="100vh">
      <Box fontSize="2rem" pl={2} py={1}>Seishin Poster Maker v2.0</Box>
      <NavigationBar />
      <Box flexGrow={1} bgcolor={BRIGHTRED} display="flex" alignItems="center" justifyContent="center">
        <Content />
      </Box>
      <Box py={0.5} px={2} textAlign="right">© asuil, 2021</Box>
    </Box>
  </Router>
);

export default App;
