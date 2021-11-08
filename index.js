function Monday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
  }
  
  function Tuesday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
  }
  
  function Wednesday() {
    console.log('Go for a five-mile run');
    console.log('Go for a five-mile run');
  }
  
  function Thursday() {
    console.log('Go for a five-mile run');
    console.log('Pump iron');
  }
  
  function Friday() {
    console.log('Go for a five-mile run');
    console.log('Swim 40 laps');
  }

 
  

  function runFiveMiles() {
    console.log('Go for a five-mile run');
  }

  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  }



  function Monday() {
    runFiveMiles();
    liftWeights();
  }
//this can be further improved by making another function which changes the post-activity
//callback, with call back

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  //callback, with call back, second activity "varies" so we can use it as a variable! Literally!

  function Monday() {
    exerciseRoutine(liftWeights); 
  }
  //callback, with callback, with callback. Passing function to another function (without running it yet)