import React from 'react';
import { WHITE } from '../constants/colors';
import Box from './Box';

type Props = {
  text: string,
  size?: number,
};

const PosterText: React.FC<Props> = ({
  text,
  size,
}) => {
  return (
    <Box
      color={WHITE}
      fontSize={size}
      letterSpacing={2}
      fontWeight={900}
    >
      {text.toLocaleUpperCase()}
    </Box>
  )
};

export default PosterText;