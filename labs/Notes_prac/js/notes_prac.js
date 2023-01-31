let point1 = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);              //set background color
  
  if(mouseIsPressed) {      //if mouse is pressed, (sets new point1 location to click location)
    point1.x = mouseX;     //set x value to mouseX location
    point1.y = mouseY;     //set y value to mouseY location
  }
  
  let dist = distance( point1, { x: mouseX, y: mouseY }); //calculate distance from point1 to mouse location w/distance function
  
  if(dist > 120){       //if distance is greater than 120, color line red
    stroke("#ff0000");
  } 
  else  {                   //else clolor line black
    stroke("#000000");
  }
  
  line(point1.x, point1.y, mouseX, mouseY);         //draw line  from point1 location to mouse location
}


function distance(p1, p2) {
  
  let dx = p1.x - p2.x;         //distance between the X 2 points
  let dy = p1.y - p2.y;         //distance between 2 Y points
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);        
   
}

