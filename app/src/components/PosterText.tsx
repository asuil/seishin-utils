import React from 'react'
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
      fontWeight={900}
      fontSize={size}
      letterSpacing={4}
    >
      {text.toLocaleUpperCase()}
    </Box>
  )
};

export default PosterText;