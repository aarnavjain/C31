class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path = []; //empty array
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>200){
      this.path.push([this.body.position.x, this.body.position.y]);
      
    }
    for(var i=0;i<this.path.length; i = i + 1){
      image(this.smoke,this.path[i][0],this.path[i][1]);
    }  
  }
}
/*
var i = 0
i = i + 1
i<this.path.length

this.path[0][0], this.path[0][1]
this.path[1][0], this.path[1][1]
.
.
.
.
this.path[length-1][0], this.path[length-1][1]
*/

