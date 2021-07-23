import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRIGHTRED, DARKRED, WHITE } from '../constants/colors';
import Box from './Box';
import Text from './Text';

type Props = {
  to: string,
};

const NavigationLink: React.FC<Props> = ({
  to,
}) => {
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(()=>{
    setText(to.charAt(0).toUpperCase() + to.substring(1).replaceAll('-', ' '));
  }, [to]);

  useEffect(()=>{
    setSelected(location.pathname.includes(to));
  }, [location, to]);
  
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Box bgcolor={selected ? BRIGHTRED : DARKRED} px={15} py={10} mx={5}>
        <Text color={WHITE} text={text} />
      </Box>
    </Link>
  )
};

export default NavigationLink;