import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QUERIES from '../constants/queries';

const Content = () => {
  const location = useLocation();
  const [key, setKey] = useState('/');

  useEffect(() => {
    let found = false;
    for (let index = 0; index < Object.keys(QUERIES).length; index += 1) {
      const query = Object.keys(QUERIES)[index];
      if (location.search.includes(query)) { setKey(query); found = true; }
    }
    if (!found) setKey('/');
  }, [location]);

  const PosterMaker: any = QUERIES[key];

  return <PosterMaker />;
};

export default Content;
