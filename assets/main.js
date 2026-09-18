const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const projectGroup = document.querySelector('.nav-group');
const projectButton = document.querySelector('.nav-trigger');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'CLOSE' : 'MENU';
  });
}

if (projectButton && projectGroup) {
  projectButton.addEventListener('click', () => {
    const open = projectGroup.classList.toggle('is-open');
    projectButton.setAttribute('aria-expanded', String(open));
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav?.classList.remove('is-open');
    projectGroup?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    projectButton?.setAttribute('aria-expanded', 'false');
  }
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
