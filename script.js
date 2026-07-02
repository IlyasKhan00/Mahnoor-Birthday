const messages = [
  "Happy Birthday Mahnoor 💖",
  "You deserve all the happiness in the world ✨",
  "Hope your day feels special 🎂",
  "You are very special 💕",
  "Wishing you so much love ❤️",
  "I Love You So Much 💖",
  "You deserve every good thing in the world ✨",
  "ILYSMMM :)",
  "UMWAAHHHH 😘"
];

function interact() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = msg;
}

/* 🎊 confetti system */
function startConfettiRain() {
  setInterval(createConfetti, 120);
}

function createConfetti() {
  const c = document.createElement("div");
  c.classList.add("confetti");

  c.style.left = Math.random() * window.innerWidth + "px";
  c.style.background = randomColor();
  c.style.opacity = Math.random();

  c.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(c);

  setTimeout(() => {
    c.remove();
  }, 5000);
}

function randomColor() {
  const colors = ["#ff4d6d", "#ffd6e0", "#ffffff", "#ffb6c1", "#a0e7e5"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* start confetti on load */
startConfettiRain();