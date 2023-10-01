// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var sentenceDisplay = document.querySelector('#sentence');

var nouns = ["cat", "dog", "bird", "tree", "flower"];
var verbs = ["runs", "jumps", "flies", "sings", "dances"];
var adjectives = ["happy", "funny", "colorful", "friendly", "playful"];
var objects = ["ball", "book", "toy", "hat", "shoe"];
var places = ["park", "beach", "school", "zoo", "garden"];

/* Functions
-------------------------------------------------- */

function speakNow(string) {
  var utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

function getRandomWord(wordArray) {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function generateSentence() {
  var subject = getRandomWord(nouns);
  var verb = getRandomWord(verbs);
  var adjective = getRandomWord(adjectives);
  var obj = getRandomWord(objects);
  var place = getRandomWord(places);
  return `The ${adjective} ${subject} ${verb} with a ${obj} in the ${place}.`;
}

function resetSentence() {
  sentenceDisplay.textContent = 'Your sentence will appear here.';
}

function generateStory() {
  var story = '';
  story += generateSentence() + ' ';
  story += generateSentence() + ' ';
  story += generateSentence() + ' ';
  story += generateSentence() + ' ';
  story += generateSentence();
  return story;
}

/* Event Listeners
-------------------------------------------------- */

document.getElementById("subjectButton").addEventListener("click", function () {
  var subject = getRandomWord(nouns);
  sentenceDisplay.textContent = `The ${subject} `;
});

document.getElementById("verbButton").addEventListener("click", function () {
  var verb = getRandomWord(verbs);
  sentenceDisplay.textContent += `${verb} `;
});

document.getElementById("adjectiveButton").addEventListener("click", function () {
  var adjective = getRandomWord(adjectives);
  sentenceDisplay.textContent += ` ${adjective} `;
});

document.getElementById("objectButton").addEventListener("click", function () {
  var obj = getRandomWord(objects);
  sentenceDisplay.textContent += `a ${obj} `;
});

document.getElementById("placeButton").addEventListener("click", function () {
  var place = getRandomWord(places);
  sentenceDisplay.textContent += `in the ${place}.`;
});

document.getElementById("storyButton").addEventListener("click", function () {
  var story = generateStory();
  sentenceDisplay.textContent = story;
  speakNow(story);
});

document.getElementById("resetButton").addEventListener("click", function () {
  resetSentence();
});
