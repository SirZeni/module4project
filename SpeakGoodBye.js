// the function layout for "byespeaker"
(function (window){
  
  var byeSpeaker = {};

  var speakWord = "Good Bye";



byeSpeaker.speak = function (names) {

//console log for speakword
  console.log(speakWord + " " + names);
}
window.byeSpeaker = byeSpeaker;


})(window);