$('document').ready(function(){

  $('#run').click(function(){
    var target = "To be or not to be";
    var populationSize = 500;
    var mutationRate = .05;
    var genePool = [];

    // Intializes genePool
    for(var i = 0; i < populationSize; i++) {
      genePool.push(new DNA(target));
    }
    var counter = 0;
    var refreshID = setInterval(function(){
      document.getElementById('test').innerHTML = counter;
      counter++;
    }, 10);

    $('#stop').click(function(){
      clearInterval(refreshID);
      document.getElementById('test').innerHTML = "Stop";
    });

  });



});
