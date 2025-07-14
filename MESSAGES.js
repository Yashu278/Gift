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

// Create lonely-1 to lonely-15 aliases
const lonelyAliases = [
  "A05A10A23", "A08A10A23", "A14A10A23", "A23A10A23", "A18A11A23",
  "A02A12A23", "A31A12A23", "A14A01A24", "AD9AD2A24", "AN9AN2A24",
  "A10A02A24", "A02A03A24", "A30A03A24", "A18A05A24", "A25A02A25"
];

lonelyAliases.forEach((realCode, index) => {
  window.messages[`lonely-${index + 1}`] = window.messages[realCode];
});


// Create anxious-1 to anxious-15 aliases
const anxiousAliases = [
  "N05N10N23", "N08N10N23", "N14N10N23", "N23N10N23", "N18N11N23",
  "N02N12N23", "N31N12N23", "N14N01N24", "ND9ND2N24", "NN9NN2N24",
  "N10N02N24", "N02N03N24", "N30N03N24", "N18N05N24", "N25N02N25"
];

anxiousAliases.forEach((realCode, index) => {
  window.messages[`anxious-${index + 1}`] = window.messages[realCode];
});

const happyAliases = [
  "H05H10H23", "H08H10H23", "H14H10H23", "H23H10H23", "H18H11H23",
  "H02H12H23", "H31H12H23", "H14H01H24", "HD9HD2H24", "HN9HN2H24",
  "H10H02H24", "H02H03H24", "H30H03H24", "H18H05H24", "H25H02H25"
];
happyAliases.forEach((realCode, index) => {
  window.messages[`happy-${index + 1}`] = window.messages[realCode];
});

const angryAliases = [
  "L05L10L23", "L08L10L23", "L14L10L23", "L23L10L23", "L18L11L23",
  "L02L12L23", "L31L12L23", "L14L01L24", "LD9LD2L24", "LN9LN2L24",
  "L10L02L24", "L02L03L24", "L30L03L24", "L18L05L24", "L25L02L25"
];
angryAliases.forEach((realCode, index) => {
  window.messages[`angry-${index + 1}`] = window.messages[realCode];
});

const thankfulAliases = [
  "T05T10T23", "T08T10T23", "T14T10T23", "T23T10T23", "T18T11T23",
  "T02T12T23", "T31T12T23", "T14T01T24", "TD9TD2T24", "TN9TN2T24",
  "T10T02T24", "T02T03T24", "T30T03T24", "T18T05T24", "T25T02T25"
];
thankfulAliases.forEach((realCode, index) => {
  window.messages[`thankful-${index + 1}`] = window.messages[realCode];
});
