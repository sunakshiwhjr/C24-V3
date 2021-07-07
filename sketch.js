const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var myEngine, myWorld;

var tower, ground, cannon;

var bgImg, towerImage, cannonball;

function preload()
{
    bgImg = loadImage("assets/background.gif");
    towerImage = loadImage("./assets/tower.png");
   
}

function setup()
{

    createCanvas(1200, 600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    angle = -PI/4;
    tower = new Tower(150, 350, 180, 310)

    ground = new Ground(600, 580, 1200, 20);

    cannon = new Cannon(180, 110, 110, 50, angle);

    cannonball = new CannonBall(cannon.x, cannon.y);

}



function draw()
{
    background("black");
    Engine.update(myEngine);
    ground.display();
    image(bgImg,0, 0, width, height);
    tower.display();
 
    cannon.display();

    cannonball.display();
}


function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
        cannonball.shoot();
    }
}