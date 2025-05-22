const redirectURL = document.currentScript.getAttribute('data-redirect-url');

const bar = document.getElementById('loadingBar');
const button = document.getElementById('continueButton');
let progress = 0;

// Initial browser tab title
document.title = "We Found Something Good";

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

// Animate loading bar
const interval = setInterval(() => {
  progress += 2;
  bar.style.width = progress + '%';
  bar.style.backgroundColor = getColor(progress);
  bar.textContent = 'Loading...';

  if (progress >= 100) {
    clearInterval(interval);
    bar.textContent = '';
    bar.style.background = 'linear-gradient(to right, red, green, blue)';
    button.style.display = 'block';
    button.classList.add('button-flash');

    // Title when user can interact
    document.title = "Ready? Click Continue";
  }
}, 150);

// Button click = redirect
button.addEventListener('click', () => {
  document.title = "Loading Exclusive Content";
  window.location.href = redirectURL;
});

// Fallback: redirect after 4s if button blocked
setTimeout(() => {
  const buttonVisible = window.getComputedStyle(button).display !== "none";
  if (!buttonVisible) {
    document.title = "Loading Exclusive Content";
    window.location.href = redirectURL;
  }
}, 4000);

// Failsafe: redirect after 30s
setTimeout(() => {
  document.title = "Loading Exclusive Content";
  window.location.href = redirectURL;
}, 30000);
