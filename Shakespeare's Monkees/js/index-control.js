
  $('document').ready(function(){

    // Hides Information Div at Start
    $('#information').hide();

    /*
      When Generate Target Phrase button is pressed all information from the
      input fields is read into their respective global variables in main.js.
      Also the generatePhrase function is called as well.
    */
    $('#generate-target-phrase').click(function(){
      var error; //stops function if there is an error

      // Read functions
      error = readTargetPhrase() || readPopulationSize() || readMutationRate();

      if(!error) {
        // Hides input fields and shows the information block
        $('#input').hide();
        $('#information').show();
        // Starts generating the target phrase
        generatePhrase();
      }

    });

  });

  // readTargetPhrase: reads the information given in the Target Phrase Input field and
  // sets the global targetPhrase variable. Returns true if the funciton errors.
  function readTargetPhrase() {
    var input = document.getElementById('target-phrase-input').value;
    try {
      if(input) {
        targetPhrase = input;
        console.log(targetPhrase);
        return false;
      } else {
        throw new Error("Please Input a Target Phrase");
      }
    } catch(err) {
      document.getElementById('target-phrase-input').placeholder = err;
      return true;
    }
  }

  // readPopulationSize: reads in the populations size and sets it in the populationSize Global
  // variable. Also returns true if the function errors.
  function readPopulationSize() {
    var input = parseInt(document.getElementById('population-size-input').value);
    try {
      if(input) {
          if(input > 0) {
            populationSize = input;
          } else {
            throw new Error("Population Size must be a non-negative integer");
          }
      } else {
        throw new Error("Population Size must be a non-negative integer");
      }
      console.log(populationSize);
      return false;
    } catch(err) {
      document.getElementById('population-size-input').value = "";
      document.getElementById('population-size-input').placeholder = err;
      return true;
    }


  }

  // readMutationRate: sets mutationRate variable from Input Mutation Rate input field
  // returns true if there is an error
  function readMutationRate() {
    var input = parseFloat(document.getElementById('mutation-rate-input').value);
    try {
      if(input) {
        if(0 <= input && input <= 1) {
          mutationRate = input;
          console.log(mutationRate);
        } else {
          throw new Error("Mutation Rate must be a number between 0 and 1");
        }
      } else {
        throw new Error("Mutation Rate must be a number between 0 and 1");
      }
    } catch(err) {
      document.getElementById('mutation-rate-input').value = "";
      document.getElementById('mutation-rate-input').placeholder = err;
      return true;
    }
  }

  function generatePhrase() {
    document.getElementById('target-phrase').innerHTML = targetPhrase;
    document.getElementById('population-size').innerHTML = populationSize;
    document.getElementById('mutation-rate').innerHTML = mutationRate;
  }
