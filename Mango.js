class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            resitution:0,
            friciton:1,
        }
        
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image=loadImage("mango.png");
        Matter.World.add(world,this.body);
        }
        
        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
}
