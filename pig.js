class Pig extends BaseClass{
    constructor(x,y){
super(x,y,50,50)
this.image=loadImage("images/enemy.png")
this.v=255
    }

 display(){
    // console.log(this.body.speed)
    
     if(this.body.speed<5){
        super.display()
     }
     else{
         World.remove(wd,this.body)
         push ()
         this.v=this.v-5
         tint (255,255,0,this.v)
         image (this.image,this.body.position.x,this.body.position.y,50,50)
         pop ()
     }
 }  
       
    }
