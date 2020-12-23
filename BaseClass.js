class BaseClass{
    constructor(x,y,w,h,a){

        var options={
            restitution:0.8,
            density : 0.8,
            friction:1       
         }
 this.body= Bodies.rectangle(x,y,w,h,options);
 this.image  = loadImage("images/base.png");
 World.add(wd,this.body)      
 this.w=w
 this.h=h
    }

    display(){
        var a=this.body.angle
        push ()
        translate(this.body.position.x,this.body.position.y);
        rotate(a);
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}