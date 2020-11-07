class Tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 450;
        this.dustbinHeight = 600;
        this.wallThickness = 10;

        this.image = loadImage("Plucking mangoes/tree.png");
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight);
        this.leftBody = Bodies.rectangle(0, this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight, {isStatic: false});
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y - this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,{isStatic: false});

        World.add(world,this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        var bottomPos = this.bottomBody.position;
        push();
        translate(bottomPos.x,bottomPos.y);
        fill(128);
        imageMode(CENTER);
        image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
        pop();
    }
}