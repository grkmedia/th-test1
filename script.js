const bar = document.getElementById('loadingBar');
const button = document.getElementById('continueButton');
let progress = 0;

document.title = "We Found Something Good";

// Secure redirect path using obscured filename and key
const redirectPath = 'x_track12.html?k=d91xq2m7r8';

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
  bar.textContent = 'Personalizing...';

  if (progress >= 100) {
    clearInterval(interval);
    bar.textContent = '';
    bar.style.background = 'linear-gradient(to right, red, green, blue)';
    button.style.display = 'block';
    button.classList.add('button-flash');

    document.title = "Ready? Click Continue";
  }
}, 150);

button.addEventListener('click', () => {
  document.title = "Loading Exclusive Content";
  window.location.href = redirectPath;
});

setTimeout(() => {
  if (progress === 0) {
    document.title = "Loading Exclusive Content";
    window.location.href = redirectPath;
  }
}, 6000);

setTimeout(() => {
  document.title = "Loading Exclusive Content";
  window.location.href = redirectPath;
}, 30000);
