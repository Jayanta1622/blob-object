// Get the CSS stylesheet
let sheet = document.styleSheets[0];

// Find the "morph" keyframes rule
for (let i = 0; i < sheet.cssRules.length; i++) {
  let rule = sheet.cssRules[i];
  if (rule.name == "morph") {
    let morphRule = rule;
    break;
  }
}

// Modify the "morph" keyframes
let minRadius = 0;
let maxRadius = 100;

for (let i = 0; i < morphRule.cssRules.length; i++) {
  let keyframe = morphRule.cssRules[i];
  let radius = getRandomInt(minRadius, maxRadius) + "%";
  keyframe.style.borderRadius = radius;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
