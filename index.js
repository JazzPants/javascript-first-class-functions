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
//only works if we lift weights on Monday
  //this can be further improved by making another function which changes the post-activity


  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  //This is the call back!
  // second activity "varies" so we can use it as a variable! Literally!

  function Monday() {
    exerciseRoutine(liftWeights); 
  }
  //callback. Passing function to another function (without running it yet)

  //callback is using a function as an argument


  exerciseRoutine(function() {
    console.log('Stretch! Work that core!');
  });
  
  // "Go for a five-mile run"
  // "Stretch! Work that core!" <- anonymous inline function to allow us to do "Pilates"

  exerciseRoutine(() => {
    console.log('Stretch! Work that core!');
  });
  
  // Or even shorter, concise version:
  exerciseRoutine(() => console.log('Stretch! Work that core!'));


  //Returning a function in a function
  function morningRoutine(exercise) {
    var breakfast = null;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise); //call this with the exercise variable replaced with liftWeights, swimFortyLaps etc.
  
    // we could give this function a name if we wanted to,
    // but since it's only available _inside_ morningRoutine(),
    // we don't need to
    return function() {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
  }

  //create a function that calls morningRoutine()
  //this is a function expression!
  var afterExercise = morningRoutine(liftWeights);

  //call it
  afterExercise();

  //in console it would look like this
  /* 
  var afterExercise = morningRoutine(liftWeights); <- afterExercise works through morningRoutine(...) function
  Go for a five-mile run <- from console.log('Go for a five-mile run');
  Pump iron <- from from console.log('Pump iron');

  afterExercise()
  Nom nom nom, this protein bar is delicious!

  */