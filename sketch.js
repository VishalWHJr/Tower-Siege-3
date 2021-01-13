
const World= Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12,v13,v14,v15,v16;
var ground1,ground2,ground3;
var box, ball;
var sling;
var bg,bgImg;
var score;
var gameState=0;
var play=0;
var released=1;

function setup(){
    var canvas = createCanvas(1000,650);
    engine = Engine.create();
    world = engine.world;
    score=0;
    
    ball=new Ball(200,415,40,40);

    // base.
    b1=new Box(540,405,30,40);
    b2=new Box(570,405,30,40);
    b3=new Box(600,405,30,40);
    b4=new Box(420,405,30,40);
    b5=new Box(450,405,30,40);
    b6=new Box(480,405,30,40);
    b7=new Box(510,405,30,40);
    // 1st floor
    b8=new Box(510,375,30,40);
    b9=new Box(540,375,30,40); 
    b10=new Box(570,375,30,40);
    b11=new Box(450,375,30,40);
    b12=new Box(480,375,30,40);
    //2nd floor
    b13=new Box(480,335,30,40);
    b14=new Box(510,335,30,40);
    b15=new Box(540,335,30,40);
    //3rd floor
    b16=new Box(510,295,30,40);

    //base 
    
    v1=new Box(720,285,30,40);
    v2=new Box(750,285,30,40);
    v3=new Box(780,285,30,40);
    v4=new Box(810,285,30,40);
    v5=new Box(840,285,30,40);
    v6=new Box(870,285,30,40);
    v7=new Box(900,285,30,40);
    //1st floor
    v8=new Box(750,245,30,40);
    v9=new Box(780,245,30,40);
    v10=new Box(810,245,30,40);
    v11=new Box(840,245,30,40);
    v12=new Box(870,245,30,40);
    //2nd flor
    v13=new Box(780,205,30,40);
    v14=new Box(810,205,30,40);
    v15=new Box(840,205,30,40);
    //3rd floor
    v16=new Box(810,165,30,40);

    // making sling 
    sling=new Sling(ball.body,{x:200,y:415})

    // making ground
    ground1=new Ground(width/2,height-25,width,20);
    ground2=new Ground(b7.body.position.x,b7.body.position.y+20,230,20);
    ground3=new Ground(b14.body.position.x+300, b14.body.position.y-30,230,20);

    

    getTime();

    
}

function draw(){
   // background("white")
    if(bgImg){
        background(bgImg);
    }
    Engine.update(engine);
    ball.display();

    //base
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    //1st floor
    b8.display1();
    b9.display1();
    b10.display1();
    b11.display1();
    b12.display1();
    //2nd floor
    b13.display2();
    b14.display2();
    b15.display2();
    //top
    b16.display3();

    //base 
    v1.display();
    v2.display();
    v3.display();
    v4.display();
    v5.display();
    v6.display();
    v7.display();
    //1st floor
    v8.display1();
    v9.display1();
    v10.display1();
    v11.display1();
    v12.display1();
    //2nd floor
    v13.display2();
    v14.display2();
    v15.display2();
    //3rd floor
    v16.display3();

    //working of score
    b1.score();
    b2.score();
    b3.score();
    b4.score();
    b5.score();
    b6.score();
    b7.score();
    b8.score();
    b9.score();
    b10.score();
    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();
    //
    v1.score();
    v2.score();
    v3.score();
    v4.score();
    v5.score();
    v6.score();
    v7.score();
    v8.score();
    v9.score();
    v10.score();
    v11.score();
    v12.score();
    v13.score();
    v14.score();
    v15.score();
    v16.score();





    //sling
    sling.display();
    // ground
    ground1.display();
    ground2.display();
    ground3.display();
    // making score card.
    fill("skyblue");
    textSize(28);
    text("score: "+score,width/2-200,35);

}

    function mouseDragged(){
        if(gameState===play){
        Body.setPosition(ball.body,{x:mouseX,y:mouseY})
        }
    }

    function mouseReleased(){
        sling.fly();
        gameState=released
    }

    function keyPressed(){
        if(keyCode===32 &&    gameState===released){
            Body.setPosition(ball.body,{x:200,y:415})
            sling.attach(ball.body);
            gameState=play;
        }
    }

    async function getTime(){
        var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
        var responseJSON=await response.json()
        console.log(responseJSON['datetime']);
        var time=responseJSON['datetime'];
        var hour=time.slice(11,13);
        console.log(hour);
        if(hour>06&& hour<18){
            bg="white"
        } else{
            //imageMode(CENTER)
            bg="black"
        }
        bgImg = bg;
        console.log(bgImg)
    }