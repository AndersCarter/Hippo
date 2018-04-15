
class DNA {
   constructor(strand, target) {
    // String that represends the current species
    this.strand = strand;

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
}
