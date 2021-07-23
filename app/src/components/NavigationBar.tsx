import React from 'react';
import { PODCAST_QUERY, TARDES_QUERY, TOPS_QUERY } from '../constants/queries';
import Box from './Box';
import NavigationLink from './NavigationLink';

const NavigationBar = () => {
  return (
    <Box flex>
      <NavigationLink to={`/?activity=${PODCAST_QUERY}`} />
      <NavigationLink to={`/?activity=${TARDES_QUERY}`} />
      <NavigationLink to={`/?activity=${TOPS_QUERY}`} />
    </Box>
  )
};

export default NavigationBar;