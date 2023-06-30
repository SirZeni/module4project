//the function layout for "hellospeaker"
(function (window){



var helloSpeaker = {};

var speakWord = "Hello";

helloSpeaker.speak = function (names) {



//console log for speakword
  console.log(speakWord + " " + names);

}



window.helloSpeaker = helloSpeaker;

}) (window);