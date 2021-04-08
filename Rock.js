class Rock{
    constructor(){
      var options = { 
        
      }
      this.body =  Bodies.rectangle();
     
      
      this.image=loadImage();
      World.add(myWorld,this.body);
    }
    show()
    {
      var pos = this.body.position;

      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
        imageMode(CENTER);
        fill('black');
        stroke ("grey");
        image(this.image,pos.x,pos.y,this.width, this.height);
    }


}
