class Log extends BaseClass{
    constructor(x,y,h,a){

    super(x,y,20,h,a)
 Matter.Body.setAngle(this.body, a);
 this.image=loadImage("images/wood2.png")
    }

    
}