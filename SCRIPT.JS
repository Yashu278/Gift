let currentEmotion = null;

function presetEmotion(emotion) {
  currentEmotion = emotion;

  document.querySelectorAll('.emotion-buttons button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(emotion)) {
      btn.classList.add('active');
    }
  });

  const placeholder = window.innerWidth <= 400
    ? `Note # or code for ${emotion}`
    : `Type note number for ${emotion}, or full code`;

  const input = document.getElementById("codeInput");
  input.value = "";
  input.placeholder = placeholder;
}

function revealMessage() {
  const input = document.getElementById("codeInput").value.trim();
  const messageDiv = document.getElementById("message");
  const inputScreen = document.getElementById("inputScreen");
  const messageScreen = document.getElementById("messageScreen");

  let code = input;

  if (/^\d+$/.test(code) && currentEmotion) {
    code = `${currentEmotion}-${code}`;
  }

  console.log("All messages keys:", Object.keys(messages));
  console.log("Entered code:", code);


  if (messages[code]) {
    messageDiv.innerHTML = messages[code];
  } else {
    const fallback = [
      "Galat code hai jaan... par mera pyaar toh hamesha sahi hai 💌",
      "Tu code bhool gayi, par main toh tujhmein hi likha hoon 💖",
      "Woh note toh chhupa hua hai... jaise tera pyaar mere dil mein 💭",
      "Shayad code nahi mila, par tu mil gayi toh sab mil gaya ❤️"
    ];
    const randomLine = fallback[Math.floor(Math.random() * fallback.length)];
    messageDiv.innerHTML = `<p>${randomLine}</p>`;
  }

  inputScreen.style.display = "none";
  messageScreen.style.display = "flex";
}

function goBack() {
  document.getElementById("inputScreen").style.display = "flex";
  document.getElementById("messageScreen").style.display = "none";
  document.getElementById("codeInput").value = "";
  document.getElementById("codeInput").placeholder = "e.g. L31L12L23";
  currentEmotion = null;

  document.querySelectorAll('.emotion-buttons button').forEach(btn => {
    btn.classList.remove('active');
  });
}

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("themeToggle");
  const isDark = body.classList.toggle("dark");
  btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeToggle").textContent = "☀️ Light Mode";
  }
});
