// Produces a random string of the given length. The string will only contain
// characters found on a keyboard.
function randomString(length) {
  var result = "";
  for(var i = 0; i < length; i++) {
    var newCharacter = randomCharacter();
    result += newCharacter;
  }
  return result;
}

// Returns a random character that appears on a keyboard.
function randomCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 95) + 32);
}
