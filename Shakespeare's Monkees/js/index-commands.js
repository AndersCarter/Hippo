$('document').ready(function(){

  $('#app').hide();
  $('#reset').hide();

  $('#run').click(function(){
    $('#inputs').hide();
    $('#reset').show();
    $('#app').show();

    var target = document.getElementById('target-phrase').value;
    var populationSize = document.getElementById('population-size').value;
    var mutationRate = document.getElementById('mutation-rate').value;
    var generations = 0;
    var genepool = initializeGenepool(populationSize, target);

    document.getElementById('target-phrase-info').innerHTML = target;
    document.getElementById('population-size-info').innerHTML = populationSize;
    document.getElementById('mutation-rate-info').innerHTML = mutationRate;


    var refreshID = setInterval(function(){
      genepool = mate(genepool, mutationRate, target);
      generations++;
      var strongestGene = findStrongestGene(genepool);
      document.getElementById('generation-info').innerHTML = generations;
      document.getElementById('highest-fitness-info').innerHTML = strongestGene.strand;
      document.getElementById('subset').innerHTML = generateSubset(genepool);

      if(strongestGene.fitness == 1) {
        clearInterval(refreshID);
      }

    }, 10);


  });

    $('#reset').click(function(){
      $('#app').hide();
      $('#inputs').show();
      generations = 0;
    });

});


// Intializes the starting genepool
function initializeGenepool(size, target) {
  var genepool = [];
  for(var i = 0; i < size; i++) {
    genepool.push(new DNA(randomString(target.length), target));
  }
  return genepool;
}

// Returns the DNA with the highest Fitness
function findStrongestGene(genepool) {
  var strongest = genepool[0];

  for(var i = 1; i < genepool.length; i++) {
    var nextGene = genepool[i];
    if(nextGene.fitness > strongest.fitness) {
      strongest = nextGene;
    }
  }

  return strongest;
}

// returns a string that is a subset of a random dna strands from the genepool;
function generateSubset(genepool) {
  var subsetString = "";
  for(var i = 0; i < 10; i++) {
    subsetString += genepool[Math.floor(Math.random() * genepool.length)].strand + "<br>";
  }
  console.log(subsetString);
  return subsetString;
}
