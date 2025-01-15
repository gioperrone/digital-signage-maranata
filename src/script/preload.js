const preload = document.querySelector('.preload');

function initPreload() {
  preload.style.opacity = '0';

  setTimeout(() => {
    preload.style.display = 'none';
  }, 500);
}

window.onload = initPreload;
