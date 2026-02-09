import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';
import getElement from './utils/getElement.js';

const title = getElement('.section-title>h1');

const innit = async () => {
  const followers = await fetchFollowers();
  displayFollowers(followers);
  title.textContent = 'pagination';
};

window.addEventListener('load', innit);
