

speed = 1;      //speed will start at 1
radius = 1;     //radius will start at 1

function setup(){
    createCanvas(800, 1000);
    background(0);  //Set background color to white
}

function draw(){
    speed += .5;        //each time the draw function runs, the speed variable will increase by .5
    radius += .5;       //each time the draw function runs, radius variable will increase by .5
    fill(120, 45, 249);     //make circle purple
    circle(speed, 500, radius);//create a circle with x value set at the speed variable, y value set at 500(the middle), and raduis set to radius variable
}