console.log("JS Loaded");

// NO button (only works in question page safely)
const noBtn = document.getElementById("no");
const box = document.getElementById("box");

if (noBtn && box) {
  noBtn.addEventListener("mouseover", () => {
    const maxX = box.clientWidth - noBtn.clientWidth;
    const maxY = box.clientHeight - noBtn.clientHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// FLOATING HEARTS
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 18 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);
}

// SAFE TYPING
function startTyping() {
  const element = document.getElementById("typingText");

  if (!element) {
    console.log("typingText not found");
    return;
  }

  const text = "🎂 Happy Birthday My Love ❤️✨";
  let index = 0;

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 90);
}

// BUTTON CLICK (SAFE AUDIO)
function playLove() {
  console.log("Button clicked");

  const msg = document.getElementById("loveMessage");
  const audio = document.getElementById("loveAudio");

  if (msg) {
    msg.innerHTML = "Happy Birthday ❤️ I Love You So Much 🎂💖";
  }

  if (audio) {
    audio.load();

    audio.play().then(() => {
      console.log("Audio playing");
    }).catch((err) => {
      console.log("Audio failed:", err);
      alert("Tap again to enable sound 🎵");
    });
  }
}

// POPUP
function togglePigNote(event) {
  const popup = document.getElementById("pigPopup");

  if (!popup) return;

  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";

    const pigRect = event.target.getBoundingClientRect();
    const boxRect = document.querySelector(".box").getBoundingClientRect();

    popup.style.top = pigRect.top - boxRect.top - popup.offsetHeight / 2 + "px";
    popup.style.left = pigRect.right - boxRect.left + 10 + "px";
  }
}
