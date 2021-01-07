var roof,rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Mtter.Render;


function setup(){
createCanvas(800,700);


engine=Engine.create();
world=Engine.world;

roof = new roof(350,100,300,30);
World.add(world,roof);

bob1 = new bob1(250,300);
bob2 = new bob2(300,300);
bob3 = new bob3(350,300);
bob4 = new bob4(400,300);
bob5 = new bob5(450,300);

rope1 = new rope1(bob1.body,roof.body,-100,0);
World.add(world,rope1);

rope2 = new rope2(bob1.body,roof.body,-50,0);
World.add(world,rope2);

rope3 = new rope3(bob1.body,roof.body,0,0);
World.add(world,rope3);

rope4 = new rope4(bob1.body,roof.body,50,0);
World.add(world,rope4);

rope5 = new rope5(bob1.body,roof.body,100,0);
World.add(world,rope5);

Engine.run(engine);
}

function draw(){

    background("white");
	Engine.update(engine);
	
	roof.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}
function KeyPressed(){
	if(KeyCode===32){
	Matter.Body.applyforce(bobObject.bopdy,bobObject1.body.position(x=72,42))
	}
}

