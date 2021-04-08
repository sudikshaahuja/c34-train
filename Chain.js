class Chain{
    constructor(){
        var options ={
            
        }
        this.chain =  Constraint.create(options);
        World.add(myWorld,this.chain);
    }

    show(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        stroke(0)
        strokeWeight(5);
        line();
    }
}