var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //grasses where players can rest
  for (var i=0; i<6; i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if (i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300,);
      road.shapeColor = "black";
    }
    bottomGrass1.shapeColor = "green";
  }

  //to create rows of car
  for(var i= 0; i<40; i++){
    car = new Car(2);
    carGroup1.add(car.spt);
  }

  //to create rows of log
  for(var i=0; i<40; i++){
     log = new Log(-2);
     logGroup1.add(log.spt);
  }

  //create player
  player = new Player(width/2, height-75);
}



function draw() {
  background("skyblue");

  //move the screen to location of player.
  translate(0,-player.spt.y+height-150);

  //making the logs reappear 
  for(var i=1; i<carGroup1.length; i++){
    if(carGroup1[i].x>width){
      carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0){
      carGroup1[i].x=width;
    }
   } 
   
   //making the logs reappear 
   for(var i=1; i<logGroup1.length; i++){
    if(logGroup1[i].x>width){
      logGroup1[i].x=0;
    }
    if(logGroup1[i].x<0){
      logGroup1[i].x=width;
    }
   }

   



  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }

  else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }

  else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }

  else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}





