var sb;
var img; 
var balloons= [];
var wishh = "";

function setup() { 
  createCanvas(windowWidth, windowHeight);
  sb = new Spacebrew.Client();
	sb.name("JiYoung's Balloontest");

  sb.addSubscribe("wishOutput", "string");
  sb.onStringMessage = onStringMessage;
  
  sb.connect();
  console.log(sb.server);
  
  img = loadImage("whiteballoon.png");
}

function draw() { 
  background(0);
    for (var i = 0; i < balloons.length; i++) {
    balloons[i].move();
    balloons[i].display();
    }
}

function Balloon(value){
 this.wishText = value;
 this.imgLocX = random(width-300);
 this.imgLocY = windowHeight;
 this.txtLocX = this.imgLocX-this.wishText.length*4.2+150;  
 this.txtLocY = this.imgLocY+80;

 this.move = function(){
 this.imgLocY--; 
 this.txtLocY--;

};
  
 this.display = function(){
  if (this.wishText!==''){
  image(img, this.imgLocX, this.imgLocY,300,300);
    fill(0);
  textSize(20);
  text(this.wishText,this.txtLocX, this.txtLocY);
  }
 }; 
}


function onStringMessage( name, value ){
  if(value != null)
  {
    console.log("String: "+name+":"+value);
  	if (name == 'wishOutput'){
    console.log("test:" + value);
   	balloons.push(new Balloon(value)); 
   
    console.log("wish:"+ value);
  	}
  }
}