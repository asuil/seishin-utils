import React from 'react';
import Box from './Box';

type Props = {
  text: string,
  size?: number,
  color?: string,
};

const Text: React.FC<Props> = ({
  text,
  size,
  color,
}) => {
  return (
    <Box
      color={color}
      fontSize={size}
      textDecoration="None"
    >
      {text}
    </Box>
  )
};

export default Text;