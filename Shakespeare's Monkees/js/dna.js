
class DNA {

   constructor(target) {
    // String that represends the current species
    this.strand = DNA.randomString(target.length);

    // value from 0 to 1 that represents how close the strand is
    // to the target strand
    this.fitness = this.calculateFitness(target);
  }

  // Calculates and returns the fitness of the strand string. Fitness is
  // determined by the average number of correct characters. Correct being
  // characters in the right index and matching the target character.
  calculateFitness(target) {
    var numOfCorrectChars = 0;
    for(var i = 0; i < target.length; i++) {
      if(this.strand[i] === target[i]) numOfCorrectChars++;
    }

    return numOfCorrectChars / target.length;
  }

  // Produces a random string of the given length. The string will only contain
  // characters found on a keyboard.
  static randomString(length) {
    var result = "";
    for(var i = 0; i < length; i++) {
      var newCharacter = String.fromCharCode(Math.floor(Math.random() * 87) + 40);
      result += newCharacter;
    }
    return result;
  }
}
