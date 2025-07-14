// const messages = {
//   "L31L12L23": `
// <b>Stuti…</b>
// Kabhi kabhi tu akeli mehsoos karti hai, even when you're surrounded by people...
// <i><b>"Teri khamoshi mein bhi tune mujhe pukara tha...</b></i>
// `,

//   "L31L12L24": `
// <b>Stuti…</b><br><br>
// Yeh woh pal tha jab tu akeli thi...

// <img src="CONTENT/AFP1.jpg" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />

// <audio controls style="margin-top: 15px; width: 100%;">
//   <source src="CONTENT/audio1.mp3" type="audio/mpeg" />
//   Your browser does not support the audio element.
// </audio>

// <video controls style="margin-top: 15px; width: 100%; border-radius: 12px;">
//   <source src="CONTENT/video1.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>
// `,

//   "L31L12L25": `
// <b>Stuti…</b><br><br>
// Woh din yaad hai jab humne ek pal ke liye sab kuch bhula diya tha?<br>
// Na duniya thi, na waqt — sirf <i>tu aur main</i>. Us pal ko maine sambhaal ke rakha hai…

// <img src="CONTENT/SDP2.jpg" style="max-width: 100%; border-radius: 12px; margin-top: 10px;" />

// <video controls style="margin-top: 15px; width: 100%; border-radius: 12px;">
//   <source src="CONTENT/SNV1.mp4" type="video/mp4" />
//   Your browser does not support the video tag.
// </video>

// <p style="margin-top: 15px;">
// <i>“Kuch yaadein sirf yaadein nahi hoti — woh ek jagah hoti hain, jahan dil baar baar laut jaata hai.”</i>
// </p>
// `,
//   "help-me-yash":`<h3><b>Hey Stuti 💌</b></h3><p><i>Sabse pehle... welcome to your own secret vault.</i></p><p>Yeh koi normal website nahi hai — yeh <i>tumhare liye likhi gayi love story</i> hai... code ke zariye.</p>
// <h3>✨ What is this?</h3><p>Yeh ek <b>\"Secret Love Vault\"</b> hai — jahan har note, har image, har video... ek emotion, ek yaad, ya ek tareekh (date) ke peeche chhupa hua hai. Tumhe sirf code daalna hai... aur woh memory khul jaayegi 💫</p>

// <h3>🔐 How to Use This</h3><p><b>1. Emotions se Access:</b></p>
// <ul>
//   <li>Screen par kuch emotions dikhenge — jaise \"Lonely\", \"Happy\", \"Proud\", etc.</li>
//   <li>Kisi ek par click karo</li>
//   <li>Ek <b>note number</b> daalo (jaise 3, 4, etc.)</li>
//   <li>Yeh number + emotion milke ek secret code ban jaata hai (e.g. lonely-3)</li>
//   <li>Enter karte hi... ✨ Magic!</li>
// </ul>

// <p><b>2. Direct Code se:</b></p>
// <p>Agar tumhare paas koi <b>pure code</b> hai (jaise L31L12L24, L31L12L25) to woh bhi daal sakti ho — bina kisi emotion choose kiye.</p>

// <p><b>3. \"help-me-yash\":</b></p>
// <p>Agar kabhi kuch bhool jao ya samajh na aaye, just type this code: <code>help-me-yash</code></p>
// <p>Main yahaan hoon… hamesha. 🤍</p>

// <h3>💡 What's Inside?</h3>
// <ul>
//   <li>💬 <b>Messages</b>: Mere dil se nikle shabdon mein chhupi feelings</li>
//   <li>🖼️ <b>Photos</b>: Tumhari ya hamari kuch khaas tasveerein</li>
//   <li>🎧 <b>Audio/Voice</b>: Kuch baatein jo sirf sunne waali hoti hain</li>
//   <li>🎥 <b>Videos</b>: Un lamhon ka jadoo jo record ho gaya tha</li>
// </ul>

// <h3>🌙 Bonus Tips</h3>
// <ul>
//   <li>🔄 <b>Dark/Light Mode</b> toggle kar sakti ho (Top-right 🌙/☀️ icon)</li>
//   <li>📱 Yeh site mobile pe bhi fully responsive hai</li>
//   <li>💔 Galat code daalogi to bhi kuch romantic line hi milegi 😅</li>
//   <li>📂 Saari media files safe hain — koi online server nahi, sirf tumhare liye.</li>
// </ul>

// <h3>🫶 Final Words</h3>
// <p><b>Stuti…</b></p>
// <p>Yeh website ek gift nahi hai — yeh ek journey hai… <i>hamari</i> 💑</p>
// <p>Kisi page ke peeche sirf text nahi, ek emotion chhupa hai. Tumhara hona, tumhara muskurana, tumhara sambhalna — sab kuch yahaan likha gaya hai.</p>
// <p>Jab bhi tum akeli mehsoos karo... ya kuch yaad aaye... ya kuch padhna ho, bas ek code daalo.</p>
// <p><i>Main tumhare liye likhta rahunga… hamesha.</i></p>

// <p><b>With all my love,<br>— Yash 💙</b></p>
//   `
// };

// // ✅ Direct aliasing — much cleaner than using emotionCodeMap
// messages["lonely-3"] = messages["L31L12L23"];
// messages["lonely-4"] = messages["L31L12L24"];
// messages["lonely-5"] = messages["L31L12L25"];
console.log("sadNotes exists?", typeof window.sadNotes);

window.messages = {
  ...(window.globalNotes || {}),
  ...(window.sadNotes || {}),
  ...(window.happyNotes || {}),
  ...(window.anxiousNotes || {}),
  ...(window.angryNotes || {}),
  ...(window.lonelyNotes || {}),
  ...(window.thankfulNotes || {})
};

// Create sad-1 to sad-15 aliases
const sadAliases = [
  "S05S10S23", "S08S10S23", "S14S10S23", "S23S10S23", "S18S11S23",
  "S02S12S23", "S31S12S23", "S14S01S24", "SD9SD2S24", "SN9SN2S24",
  "S10S02S24", "S02S03S24", "S30S03S24", "S18S05S24", "S25S02S25"
];

sadAliases.forEach((realCode, index) => {
  window.messages[`sad-${index + 1}`] = window.messages[realCode];
});


