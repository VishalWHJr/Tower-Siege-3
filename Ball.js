class Ball{
    constructor(x, y, width,height){
        var options={
            restitution:0.8,
            density:1.2,
            friction:1
        }
        this.body=Bodies.rectangle(x,y, width, height, options);
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width+15, this.height+15);
    }
}