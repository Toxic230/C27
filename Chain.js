class Chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness: 0.04,
            length: 10
        }
    
        var chain = Constraint.create(options);
        World.add(world, chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointa.y,pointB.x,pointB.y)
    }
}