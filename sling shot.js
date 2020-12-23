class Shoot{
    constructor(a,b){
        var options={
            bodyA:a,
        pointB:b,
            stiffness:0.2,length:10
        }
       this.sling=Matter.Constraint.create(options)
       World.add(wd,this.sling)
this.sling1=loadImage("images/sling1.png")
this.sling2=loadImage("images/sling2.png")
this.sling3=loadImage("images/sling3.png")
    }
    display(){
        if(this.sling.bodyA){

        
       var pointA= this.sling.bodyA.position
var pointB= this.sling.pointB
            image(
                this.sling1,250,30
            )
           image(this.sling2,220,30) 
           strokeWeight(5)
           stroke("#301608")
           line (pointA.x-25,pointA.y,pointB.x-20,pointB.y-10)
           line (pointA.x+25,pointA.y,pointB.x+20,pointB.y-10)
            }
    }

    fly(){
this.sling.bodyA=null
    }
}