class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body=Matter.Bodies.rectangle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("stone.png");
        Matter.World.add(world,this.body);
        }
        
        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
}
