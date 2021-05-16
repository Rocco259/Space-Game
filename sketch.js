var space, spaceImg;
var spaceship, spaceshipImg;
var star, starImg, starGroup;
var score = 0;

function preload(){
    spaceImg = loadImage("space.png");
    spaceShipImg = loadImage("Space Ship.png");
    starImg = loadImage("star.jpg");
}

function setup() {
   createCanvas(400,400);

   space = createSprite(200,200);
   space.addImage(spaceImg);

   spaceship = createSprite(200,300);
   spaceship.addImage(spaceShipImg);
   spaceship.scale = 0.1;

    starGroup = new Group();
}
function draw() {


    movement();
    createStars();

    if(starGroup.isTouching(spaceship)){
        score = score + 1;
        starGroup.destroyEach();
    }

    if(score === 10){
        background(0);
        Text("You Win", 200, 200);
    }
    drawSprites();
}



function movement(){

    if(keyDown("left_arrow")){
        spaceship.x = spaceship.x - 3;
    }

    if(keyDown("right_arrow")){
        spaceship.x = spaceship.x + 3;
    }
}

function createStars(){
    if(frameCount % 150 === 0){
        var star = createSprite(50,0,20,20);
        star.addImage(starImg);
        star.scale = 0.1   
        star.x = Math.round(random(100,400));
        star.velocityY = 2;    

        starGroup.add(star);
    }
}