import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { BRIGHTRED, DARKRED, WHITE } from '../constants/colors';

type Props = {
  to: string,
};

const NavigationLink = ({ to }: Props) => {
  const location = useLocation();
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');
  const [HRef, setHRef] = useState('/');

  useEffect(() => {
    if (to === '/') {
      setText('');
    } else {
      const activity = to.substring(to.indexOf('=') + 1);
      setText(activity.charAt(0).toUpperCase() + activity.substring(1).replaceAll('-', ' '));
    }
  }, [to]);

  useEffect(() => {
    if (location.search.length) {
      setSelected(location.search.includes(to));
    } else {
      setSelected(to === '/');
    }
  }, [location, to]);

  useEffect(() => {
    setHRef(to === '/' ? '/' : `/?activity=${to}`);
  }, [to]);

  return (
    <Link to={HRef} style={{ textDecoration: 'none', height: '100%' }}>
      <Box
        bgcolor={selected ? BRIGHTRED : DARKRED}
        color={WHITE}
        px={2}
        mx={1}
        display="flex"
        alignItems="center"
        height="100%"
      >
        {text || (<HomeIcon />)}
      </Box>
    </Link>
  );
};

export default NavigationLink;
