const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup(){
    canavs = createCanvas(windowWidth/2.9, windowHeight/1.8);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options ={
        mouse:canvasmouse
    };
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);

    bob1 = new Pendulum(width-410,height-90,color(0, 38, 255));
    bob2 = new Pendulum(width-350,height-90,color(0, 38, 255));
    bob3 = new Pendulum(width-290,height-90,color(0, 38, 255));
    bob4 = new Pendulum(width-230,height-90,color(0, 38, 255));
    bob5 = new Pendulum(width-170,height-90,color(0, 38, 255));

    sling1 = new Sling(bob1.body, {x:140, y:100});  
    sling2 = new Sling(bob2.body, {x:200, y:100});  
    sling3 = new Sling(bob3.body, {x:260, y:100}); 
    sling4 = new Sling(bob4.body, {x:320, y:100}); 
    sling5 = new Sling(bob5.body, {x:380, y:100}); 


}

function draw(){
    background(180);
    Engine.update(engine);
    
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}