const bar = document.getElementById('loading_bar');
const button = document.getElementById('continue_button');
const image = document.getElementById('main_image');
let progress = 0;

document.title = "We Found Something Good";

const imageRedirect = 'https://distroutshantimal.com/click/1';
const buttonRedirect = 'https://distroutshantimal.com/click/2';
const fallbackRedirect = 'https://distroutshantimal.com/click/3';

function getColor(progress) {
  if (progress < 50) {
    const ratio = progress / 50;
    const r = 255 * (1 - ratio);
    const g = 255 * ratio;
    return `rgb(${r}, ${g}, 0)`; // red to green
  } else {
    const ratio = (progress - 50) / 50;
    const g = 255 * (1 - ratio);
    const b = 255 * ratio;
    return `rgb(0, ${g}, ${b})`; // green to blue
  }
}

const interval = setInterval(() => {
  progress += 2;
  bar.style.width = progress + '%';
  bar.style.backgroundColor = getColor(progress);
  bar.textContent = 'Getting things ready...';

  if (progress >= 100) {
    clearInterval(interval);
    bar.textContent = '';
    bar.style.background = 'linear-gradient(to right, red, green, blue)';
    button.style.display = 'block';
    button.classList.add('pulse');
    document.title = "Ready? Click Continue";
  }
}, 150);

button.addEventListener('click', () => {
  document.title = "Loading Exclusive Content";
  window.location.href = buttonRedirect;
});

if (image) {
  image.addEventListener('click', () => {
    document.title = "Loading Exclusive Content";
    window.location.href = imageRedirect;
  });
}

setTimeout(() => {
  if (progress === 0) {
    document.title = "Loading Exclusive Content";
    window.location.href = fallbackRedirect;
  }
}, 6000);

setTimeout(() => {
  document.title = "Loading Exclusive Content";
  window.location.href = fallbackRedirect;
}, 30000);
