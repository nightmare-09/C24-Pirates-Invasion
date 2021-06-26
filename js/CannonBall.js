class CannonBall{
    constructor(x,y,radius){
        
        var cannonball_options={
           isStatic: true,
           restitution:0.8,
           friction:1,
           density:1
        };

        this.x= x;
        this.y= y;
        this.radius= radius;
        this.body= Bodies.circle(x, y, radius, cannonball_options);
        this.image= loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }

    display(){
        var angle= this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }

    shoot(){
        var velocity= p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x:velocity.x, y:velocity.y});
    }
}