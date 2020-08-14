  var Engine = Matter.Engine;
  var World = Matter.World;
  var Bodies = Matter.Bodies;

  var engine, world;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score = 0;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 

function draw() {
  background("black");
  Engine.update(engine);
  //Engine.run(engine);

  textSize(30);
  fill("white");
  text("Score: " + score,20,30);
  text("500",15,550);
  text("500",95,550);
  text("500",175,550);
  text("500",255,550);
  text("100",335,550);
  text("100",415,550);
  text("100",495,550);
  text("200",575,550);
  text("200",655,550);
  text("200",735,550);
 
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   mousePressed();

   if(particles!=null){

    particles.display();

    if(particles.body.position.y > 760){

      if(particles.body.position.x < 300){

        score=score+500
        particle=null;

        if(turn<=5){gameState = "end"}
      }

      if(particles.body.position.x > 301 && particles.body.position.x < 600){

        score=score+100
        particle=null;

        if(turn<=5){gameState = "end"}
      }
      
      if(particles.body.position.x > 601 && particles.body.position.x < 900){

        score=score+200
        particle=null;

        if(turn<=5){gameState = "end"}
      }
    }
   }

   if(gameState === "end"){
    textSize(50);
    fill("white");
    text("Game Over",400,400)
   }

   //drawSprites();
}

function mousePressed(){
if(gameState !== "end"){

    turn++
    particles = new Particle(mouseX,10,10);
  }
}