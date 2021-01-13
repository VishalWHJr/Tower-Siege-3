class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility=225;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed<3){
          var angle=this.body.angle;
          var pos=this.body.position
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("#87CEEA")
          rect(0,0,this.width,this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          pop();
        }
      }
      
      display1(){
        if(this.body.speed<3){
          var angle=this.body.angle;
          var pos=this.body.position
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("#FFC0CB");
          rect(0,0,this.width,this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          pop();
        }
      }
      display2(){
        if(this.body.speed<3){
          var angle=this.body.angle;
          var pos=this.body.position
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("#3FE0D0");
          rect(0,0,this.width,this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          pop();
        }
      }

      display3(){
        if(this.body.speed<3){
          var angle=this.body.angle;
          var pos=this.body.position
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("#808080");
          rect(0,0,this.width,this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          this.visibility=this.visibility-5;
          pop();
        }
      }
      score(){
        if(this.visibility<0 && this.visibility>-50){
          score=score+1;
        }
      }
  }