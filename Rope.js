class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var body1,body2;
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX , y:this.offsetY}
    }
    this.rope = Matter.constraint.create(op);
    World.add(world,this.rope);
}
display(){
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    strokeWeight(2);
}
