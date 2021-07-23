import React from 'react';
import Box from './Box';
import NavigationLink from './NavigationLink';

const NavigationBar = () => {
  return (
    <Box flex>
      <NavigationLink to="podcast" />
      <NavigationLink to="tardes-de-anime" />
      <NavigationLink to="tops-10+1" />
    </Box>
  )
};

export default NavigationBar;