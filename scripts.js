const bar = document.getElementById('loadingBar');
const button = document.getElementById('continueButton');
const image = document.getElementById('main_image');
let progress = 0;

document.title = "We Found Something Good";

// Redirect targets
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
    button.classList.add('button-flash');
    document.title = "Ready? Click Continue";
  }
}, 150);

// Button click → redirect to offer 2
button.addEventListener('click', () => {
  document.title = "Loading Exclusive Content";
  window.location.href = buttonRedirect;
});

// Image click → redirect to offer 1
if (image) {
  image.addEventListener('click', () => {
    document.title = "Loading Exclusive Content";
    window.location.href = imageRedirect;
  });
}

// JS failsafe → redirect after 6s if nothing progresses
setTimeout(() => {
  if (progress === 0) {
    document.title = "Loading Exclusive Content";
    window.location.href = fallbackRedirect;
  }
}, 6000);

// Hard failsafe → always redirect after 30s
setTimeout(() => {
  document.title = "Loading Exclusive Content";
  window.location.href = fallbackRedirect;
}, 30000);

