import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { PODCAST_QUERY, TARDES_QUERY, TOPS_QUERY } from '../constants/queries';
import PodcastContent from './PodcastContent';
import TardesContent from './TardesContent';
import TopsContent from './TopsContent';
import WelcomeContent from './WelcomeContent';

const Content = () => {
  const location = useLocation();
  const [showPodcast, setShowPodcast] = useState(false);
  const [showTardes, setShowTardes] = useState(false);
  const [showTops, setShowTops] = useState(false);

  useEffect(() => {
    setShowPodcast(location.search.includes(PODCAST_QUERY));
    setShowTardes(location.search.includes(TARDES_QUERY));
    setShowTops(location.search.includes(TOPS_QUERY));
  }, [location])

  return (showPodcast && (<PodcastContent />))
    || (showTardes && (<TardesContent />))
    || (showTops && (<TopsContent />))
    || (<WelcomeContent />)
};

export default Content;