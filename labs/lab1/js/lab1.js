/*
Cat drawing
Algo:
   1.) create Setup function & use it to:
        -create canvas
        -set background color
        -fill & draw circle for cat head
        -fill & draw triangles for ears
        -fill & draw ellipse for  nose 
        -use lines for whiskers & eyebrows

   2.) create draw function & use it to
        -draw eyes 
            --draw pupils inside eyeball & get random #s to change the colors
        -use if statment 
        if mouse is pressed, open cats mouth, otherwise draw no mouth
*/

function setup(){
    createCanvas(1200, 700);                
    frameRate(20);                            //slows down frame rate to make eye color change slower
    background(128, 128, 128);               //sets backrgound color to grey

    //ears
    fill(255, 102, 204);                            //changes triangles(ears) color to  pink       
    triangle(400, 200, 600, 200, 500, 10);          //(x1, y1, x2, y2, x3, y3)
    triangle(600, 200, 800, 200, 700, 10);          //(x1, y1, x2, y2, x3, y3)

    //head
    fill(150, 121, 105);                      //changes circle(head) color to brown      
    strokeWeight(10);                        //changes the thickness of the circle
    circle(600, 350, 500);                  //circle for cats head in the center,location (600, 350), with diameter of 500

    //whiskers
    strokeWeight(3);                            //changes the thickness of the nose
    line(600, 400, 500, 350);                   //(x1,y1,x2,y2)
    line(600, 400, 500, 400);                   //(x1,y1,x2,y2)
    line(600, 400, 500, 450);                   //(x1,y1,x2,y2)
    line(600, 400, 700, 350);                   //(x1,y1,x2,y2)
    line(600, 400, 700, 400);                   //(x1,y1,x2,y2)
    line(600, 400, 700, 450);                   //(x1,y1,x2,y2)

    //eyebrows
    strokeWeight(5);                            //changes the thickness of the eyebrows
    line(450 , 180 , 550, 220);                     //(x1,y1,x2,y2)
    line(650, 220, 750, 180);                       //(x1,y1,x2,y2)

    //nose
    fill(255, 102, 204);                            //changes nose color to  pink 
    ellipse(600, 400, 100, 30);                     //ellipse for nose (x, y, width, height)
}


function draw(){
    //eyes
    strokeWeight(5);                                    //change stroke weight of eyes & mouth
    stroke(150, 121, 105);                              //change stroke color to same color as cats head
    fill(255, 255, 255);                               //make elllipses(eyes) white
    ellipse(500, 250, 100, 50);                      //ellipse for left eye (x, y, width, height)
    ellipse(700, 250, 100, 50);                      //ellipse for right eye (x, y, width, height)

    //pupils
    var a, b, c;                      //create variables a, b, & c,,,, each to store a value for rgb colors
    a = Math.floor(Math.random()*256);              //get a random number between 0 to 255
    b = Math.floor(Math.random()*256);
    c = Math.floor(Math.random()*256);
    fill(a, b, c);                              //fill with random numbers to create color changing pupils
    circle(500, 250, 50);                      //circle for left pupil,location (500, 250), with diameter of 50
    circle(700, 250, 50);                       //circle for left pupil,location (500, 250), with diameter of 50
    //console.log(a);
    // console.log(b);
    //console.log(c);

    if(mouseIsPressed){                         //if mouse is clicked show cat opening its mouth
        fill(255, 255, 255);                        //change mouth background to white
        ellipse(600, 500, 200, 70);                 //draw ellipse for mouth 
        //teeth
        strokeWeight(1);                                //change strokeweight of teeth
        fill(0);                                        //change teeth color to black
        triangle(580, 500, 600, 465, 560, 465);          //draw teeth(x1, y1, x2, y2, x3, y3)
        triangle(620, 500, 640, 465, 600, 465);          //draw teeth (x1, y1, x2, y2, x3, y3)
    }
    else{                           //otherwise mouth will be closed
        fill(150, 121, 105);        //fill to color of head to make mouth inviible
        ellipse(600, 500, 200, 70);       //draw same ellipse as mouth (but its color will match the head, making it invisible) 
        fill(0);                                //change color of closed mouth to black    
        ellipse(600, 500, 200, 10);             //draw a closed ellipse to make closed mouth
    }
}