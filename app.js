import fetchFollowers from './utils/fetchFollowers.js';
import displayFollowers from './utils/displayFollowers.js';
import paginate from './utils/paginate.js';
import displayButtons from './utils/displayButtons.js';
import getElement from './utils/getElement.js';

const title = getElement('.section-title>h1');
const btnContainer = getElement('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const innit = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'pagination';
  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    const currentIndex = parseInt(e.target.dataset.index);
    index = currentIndex;
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }

    console.log(pages.length);
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener('load', innit);
