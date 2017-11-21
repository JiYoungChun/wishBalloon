var input, button, wishing;
var sb;

function setup() {

  createCanvas(windowWidth, windowHeight);
  sb = new Spacebrew.Client();
	
  sb.addPublish("wishInput", "string", "");
  sb.name("JiYoung's real phone")
  sb.onStringMessage = onStringMessage;
  
  sb.connect();
  console.log(sb.server);
  
  input = createInput();
  input.position(20, 65);

  button = createButton('send');
  button.position(input.x + input.width, 65);
  button.mousePressed(makeWish);

  wishing = createElement('h2', 'what is your wish?');
  wishing.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
}

function makeWish() {
  var wish = input.value();
  input.value('');

	background(255)
  text(wish, windowWidth/2, windowHeight/2);
  sb.send("wishInput","string",wish);
  
}

function onStringMessage( name, value ){
	console.log("String: "+name+":"+value);
  
}