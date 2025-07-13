function goBack() {
  document.getElementById("inputScreen").style.display = "flex";
  document.getElementById("messageScreen").style.display = "none";
  document.getElementById("codeInput").value = "";

  // ✅ Reset placeholder
  document.getElementById("codeInput").placeholder = "e.g. L31L12L23";

  // ✅ Clear active emotion and button highlight
  currentEmotion = null;
  document.querySelectorAll('.emotion-buttons button').forEach(btn => {
    btn.classList.remove('active');
  });
}


function toggleTheme() {
  const body = document.body;
  const button = document.getElementById("themeToggle");
  const isDark = body.classList.toggle("dark");

  button.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeToggle").textContent = "☀️ Light Mode";
  }
});

let currentEmotion = null;

function presetEmotion(emotion) {
  currentEmotion = emotion;

  // Remove 'active' class from all buttons
  document.querySelectorAll('.emotion-buttons button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add 'active' class to the clicked one
  const buttons = document.querySelectorAll('.emotion-buttons button');
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(emotion)) {
      btn.classList.add('active');
    }
  });

  // Responsive placeholder
  const placeholderText = window.innerWidth <= 400
    ? `Note # or code for ${emotion}`
    : `Apna ${emotion} note ya code likhiye ji`;

  document.getElementById("codeInput").value = "";
  document.getElementById("codeInput").placeholder = placeholderText;
}


function revealMessage() {
  const rawInput = document.getElementById("codeInput").value.trim();
  const messageScreen = document.getElementById("messageScreen");
  const inputScreen = document.getElementById("inputScreen");
  const messageDiv = document.getElementById("message");

  let code = rawInput;

  // If it's a number and emotion is selected, try mapping
  if (/^\d+$/.test(code) && currentEmotion) {
    const lookupKey = `${currentEmotion}-${code}`;
    if (emotionCodeMap[lookupKey]) {
      code = emotionCodeMap[lookupKey]; // Convert "lonely-3" to "L31L12L23"
    }
  }

  if (messages[code]) {
    messageDiv.innerHTML = messages[code];
  } else {
    const romanticErrors = [
      "Galat code hai jaan... par mera pyaar toh hamesha sahi hai 💌",
      "Tu code bhool gayi, par main toh tujhmein hi likha hoon 💖",
      "Woh note toh chhupa hua hai... jaise tera pyaar mere dil mein 💭",
      "Shayad code nahi mila, par tu mil gayi toh sab mil gaya ❤️"
    ];
    const randomLine = romanticErrors[Math.floor(Math.random() * romanticErrors.length)];
    messageDiv.innerHTML = `<p>${randomLine}</p>`;
  }

  inputScreen.style.display = "none";
  messageScreen.style.display = "flex";
}