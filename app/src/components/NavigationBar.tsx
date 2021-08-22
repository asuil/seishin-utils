import { Box } from '@material-ui/core';
import QUERIES from '../constants/queries';
import NavigationLink from './NavigationLink';

const NavigationBar = () => (
  <Box display="flex" height={48}>
    {
      Object.keys(QUERIES).map((query) => (
        <NavigationLink key={query} to={query} />
      ))
    }
  </Box>
);

export default NavigationBar;
