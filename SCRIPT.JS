function presetEmotion(emotion) {
  document.getElementById("codeInput").value = `${emotion}-`;
}

function revealMessage() {
  const code = document.getElementById("codeInput").value.trim().toLowerCase();
  const messageScreen = document.getElementById("messageScreen");
  const inputScreen = document.getElementById("inputScreen");
  const messageDiv = document.getElementById("message");

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

function goBack() {
  document.getElementById("inputScreen").style.display = "flex";
  document.getElementById("messageScreen").style.display = "none";
  document.getElementById("codeInput").value = "";
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
