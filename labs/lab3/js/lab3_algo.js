//lab3.1 Drawing Drawer
//Zane Smith
//January 30, 2023
//NewM-N220




/*                      3.1 Drawing drawer

Algo:
    1.) use shapes to draw an object(a face)
    2.) move into its own function(draw face() )
        -> composed of circle for head, 2 circles for eyes, and ellipse for mouth
    3.) add 2 parameters to function(mouseX, mouseY) to follow make face follow mouse
    4.) change the values for the shaped location to the x & y passed in
        ->use addition on x & y values to ensure they eyes and mouth are always in the right spot on the face compared to the 
        heads location
*/



/*              3.2 Red Remover

Algo:
    1.) write a function// make it take a color as an argument
    2.) in the function,, set the red value of that color to 0 using colorVariableArgumentName.setRed(0)
    3.) use a return statment to get color values;
    4.) create a variable that uses is = to the value of whatever is returned
    5.) fill(returned value variable)
    6.) draw circle(should be filled the color of whatever is the color passed is with red set to zero)
*/



/*          3.3 Polar Points

Algo:
    1.) create draw and setup functions,,,,, along with new polarPoint function
    2.) add 'r' as a param to polar point
    3.) create x variable and set it to r * Math.sin(mouseX); in polarPoint function
    4.) var y  = r * Math.cos(mouseX);in polarPoint function
    5.) return reateVector(x,y); in polarPoint function
    6.) test
        -> create variable and set it = to result of whatver the function returns
        -> translate 100, 100;
        -> draw a circle with results from functions
*/