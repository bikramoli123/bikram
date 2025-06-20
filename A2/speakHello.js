(function () {
  var greetings = [
    "Hello", "Hola", "Bonjour", "Hallo", "Ciao",
    "こんにちは", "안녕하세요", "你好", "Xin chào", "नमस्कार"
  ];

  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    for (var i = 0; i < greetings.length; i++) {
      console.log(greetings[i] + " " + name);
    }
  };

  window.helloSpeaker = helloSpeaker;
})();
