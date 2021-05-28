class Bob {
    constructor(x,y,radius) {
        var options = {
            isstatic:false,
            restitution:1,
            friction:0,
            density:0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        //rectMode(CENTER);
        fill("purple");
        translate(pos.x, pos.y);
        circle(0, 0, this.radius);
        //circle(pos.x, pos.y, this.radius);
        pop();
    } 
}