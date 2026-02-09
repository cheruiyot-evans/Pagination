import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';
import getElement from './utils/getElement.js';

const title = getElement('.section-title>h1');

const innit = async () => {
  const followers = await fetchFollowers();
  displayFollowers(paginate(followers)[0]);
  title.textContent = 'pagination';
  const pages = paginate(followers);
};

window.addEventListener('load', innit);
