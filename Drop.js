class Drop{
    constructor(){
        this.x = rand(0,width);
        this.y= rand(-80,height+80);
        this.update();
    }
    
    draw(){
        if(Math.random()>0.1)
            fill(37,219,173);
        else
            fill(170,250,170);
       rect(this.x,this.y,6,10);
    }
    
    update(){
        this.y+=20;
        
        if(this.y>height+80){
            this.y = rand(-80,20);
            this.x = rand(0,width);
        }
        this.draw();
    }
}

function rand(min,max){
    return floor(random(min,max));
}
