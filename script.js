const messages = [
  "HAPPPYY BIRTHDAYYY JANNNUU 💖",
  "YOU ARE THEE BESTTT!!!",
  "HAVE A GREATTT DAYY ;) 🎂",
  "YOU ARE SOOO SPECIALLL!!!  💕",
  "I LOVE YOU SOO MUCHEIEIEIE💖",
  "UMWAAHHHH 😘",
  "ILYSMMMM :)"
];

function interact() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = msg;
}

/* 🌸 flower click */
function interactFlower() {
  interact();
}

/* 🎵 FIXED MUSIC SYSTEM */
let musicStarted = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");

  if (!music) return;

  music.volume = 0.6;

  if (!musicStarted) {
    music.currentTime = 0;
    musicStarted = true;
  }

  if (music.paused) {
    music.play().catch(err => {
      console.log("Blocked:", err);
      alert("Click again to enable music 🎵");
    });
  } else {
    music.pause();
  }
}
function startConfettiRain() {
  // 🔥 more frequent bursts
  setInterval(() => {
    for (let i = 0; i < 6; i++) {
      createConfetti();
    }
  }, 80);
}

function createConfetti() {
  const c = document.createElement("div");
  c.classList.add("confetti");

  c.style.left = Math.random() * window.innerWidth + "px";
  c.style.background = randomColor();

  // 🔥 more variety in opacity
  c.style.opacity = 0.5 + Math.random() * 0.5;

  // 🔥 faster + more chaotic fall
  c.style.animationDuration = (1.5 + Math.random() * 2.5) + "s";

  // 🔥 random size (feels richer)
  const size = 4 + Math.random() * 6;
  c.style.width = size + "px";
  c.style.height = size * 1.5 + "px";

  document.body.appendChild(c);

  setTimeout(() => {
    c.remove();
  }, 5000);
}

function randomColor() {
  const colors = [
    "#ff4d6d",
    "#ffd6e0",
    "#ffffff",
    "#ffb6c1",
    "#a0e7e5",
    "#ffd166",
    "#cdb4db"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.addEventListener("load", () => {
  startConfettiRain();
});
/* 🎉 INTRO START FUNCTION */
function startExperience() {
  const intro = document.getElementById("introScreen");
  const music = document.getElementById("bgMusic");
  const introSound = document.getElementById("introSound");
  const flower = document.querySelector(".flower");

  // fade intro
  intro.style.transition = "0.8s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
  }, 800);

  // 🎵 sound effect
  if (introSound) {
    introSound.play().catch(() => {});
  }

  // 🎵 unlock music
  if (music) {
    music.play().catch(() => {});
  }

  // 🌸 reveal flower
  setTimeout(() => {
    flower.classList.add("show");
  }, 500);

  // 🎊 start confetti
  startConfettiRain();

  // 💖 typewriter start
  startTypewriter();
}
window.addEventListener("load", () => {
  const loading = document.getElementById("loadingScreen");
  const intro = document.getElementById("introScreen");

  setTimeout(() => {
    loading.style.display = "none";
    intro.style.display = "flex";
  }, 2000);
});
const typeText = "You are the most special part of my world 💖✨";

let i = 0;

function startTypewriter() {
  const el = document.getElementById("typewriter");
  el.innerHTML = "";

  i = 0;

  const interval = setInterval(() => {
    el.innerHTML += typeText[i];
    i++;

    if (i >= typeText.length) {
      clearInterval(interval);
    }
  }, 60);
}