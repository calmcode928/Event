// Elements
const noBtn = document.getElementById("no");
const box = document.getElementById("box");

// "No" button moves away
if (noBtn && box) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = box.clientWidth - noBtn.clientWidth;
    const maxY = box.clientHeight - noBtn.clientHeight;
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  });
}

// Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 200);
}

// Typing animation
function startTyping() {
  const el = document.getElementById("typingText");
  if (!el) return;

  const text = "🎂 Happy Birthday ❤️✨";
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 90);
}

// Click for birthday wish
function playLove() {
  const msg = document.getElementById("loveMessage");
  const audio = document.getElementById("loveAudio");

  if (msg) msg.innerHTML = "Happy Birthday ❤️🎂";
  if (audio) {
    audio.load(); 
    audio.play().catch(() => alert("Tap again to play music 🎵"));
  }
}

// Popup toggle
function togglePigNote() {
  const popup = document.getElementById("pigPopup");
  if (!popup) return;

  popup.style.display = popup.style.display === "block" ? "none" : "block";
}
