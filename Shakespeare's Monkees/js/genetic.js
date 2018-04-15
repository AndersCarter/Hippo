
// Mates the current genepool and creates the next one.
function mate(genepool, mutationRate, target) {
  var matingpool = createMatingpool(genepool);
  var newGenepool = createNextGenepool(matingpool, genepool.length, mutationRate, target);
  return newGenepool;

}

// Creates the mating pool by adding floor(fitness * 100) copies of the
// possible parent into the mating pool;
function createMatingpool(genepool) {
  var matingpool = [];
  for(let i = 0; i < genepool.length; i++) {

    let poolNum = Math.floor(genepool[i].fitness * 100);
    for(var j = 0; j < poolNum; j++) {
      matingpool.push(genepool[i].strand);
    }
  }

  return matingpool;
}

// Creates a new genepool of the given size by crossing over two parents from the
// mating pool
function createNextGenepool(matingpool, size, mutationRate, target) {
  var genepool = [];
  for(var i = 0; i < size; i++) {
    let father = matingpool[Math.floor(Math.random() * matingpool.length)];
    let mother = matingpool[Math.floor(Math.random() * matingpool.length)];
    genepool.push(crossover(father, mother, mutationRate, target));
  }

  return genepool;
}

// Creates a new DNA by crossing over the strands from the mother and father.
// Also mutates the child DNA by chaning a character into another random character.
function crossover(father, mother, mutationRate, target){
  var child_strand = "";

  for(var i = 0; i < father.length; i++) {
    var willMutate = Math.random() < mutationRate;

    if(willMutate) {
      child_strand += randomCharacter();
    } else if(Math.random() < .5) {
      child_strand += father[i];
    } else {
      child_strand += mother[i];
    }
  }

  return new DNA(child_strand, target);

}
