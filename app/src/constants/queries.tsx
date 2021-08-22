import Home from '../components/Home';
import PodcastPosterMaker from '../components/PodcastPosterMaker';
import TardesPosterMaker from '../components/TardesPosterMaker';
import TopsPosterMaker from '../components/TopsPosterMaker';

const QUERIES: {[key: string]: any} = {
  '/': Home,
  podcast: PodcastPosterMaker,
  'tardes-de-anime': TardesPosterMaker,
  'tops-10+1': TopsPosterMaker,
};

export default QUERIES;
