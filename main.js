

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  if(counter>=3){
    sceneNum +=1;
    counter=0;
  } 
  
  switch(sceneNum){ // the variable youre checking, can be num, word...
    case 1: //setting up the action for when num is 0
      sceneOne(); // what happens when num is 0
      break; // breaking out of the switch statement
      
    case 2:
      sceneTwo();
      break;
      
    case 3:
      sceneThree();
      break;
      
    default:
      text("default",200 , 200);
      break;
      
  }
}

function doubleClicked() {
  //sceneNum += 1
  counter +=1;
}

function keyPressed() {
   if (keyCode === ENTER) {
    let fs = fullscreen();
    fullscreen(!fs);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size
}

