const imageRedirectURL = "https://distroutshantimal.com/click/1";
const buttonRedirectURL = "https://distroutshantimal.com/click/2";
const fallbackRedirectURL = "https://distroutshantimal.com/click/3";

const loadingBar = document.getElementById("loading_bar");
const continueButton = document.getElementById("continue_button");
const loadingLabel = document.getElementById("loading_label");

let loadingTime = 6000;
let interval = loadingTime / 3;
let colors = ["red", "green", "blue"];
let index = 0;

// Set up fallback auto-redirect
setTimeout(() => {
  window.location.href = fallbackRedirectURL;
}, 30000);

// Start loading bar animation and color change
function startLoading() {
  loadingBar.style.backgroundColor = colors[0];
  loadingBar.style.transition = `width ${loadingTime}ms linear`;
  loadingBar.style.width = "100%";

  let shimmerTimeout = setTimeout(() => {
    loadingBar.classList.add("shimmer");
  }, 3500);

  let colorInterval = setInterval(() => {
    index++;
    if (index < colors.length) {
      loadingBar.style.backgroundColor = colors[index];
    } else {
      clearInterval(colorInterval);
    }
  }, interval);

  setTimeout(() => {
    continueButton.classList.remove("hidden");
    continueButton.classList.add("pulse");
    continueButton.style.backgroundColor = colors[colors.length - 1];
  }, loadingTime);
}

document.getElementById("main_image").addEventListener("click", () => {
  window.location.href = imageRedirectURL;
});

continueButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = buttonRedirectURL;
});

startLoading();
