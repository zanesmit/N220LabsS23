//Lab 9.3 make Divs
//Zane Smith
//April 5, 2023
//NewM-N220


//INSTRUCTIONS: 
/*Given the array

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.
 

/*Algo:
    1.)loop through the array of objects and stile the div basted on the objects variables
*/
 
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
   ];
   
   let container = document.getElementById("result"); // assuming there's a container element in the HTML
   
   for (let i = 0; i < objects.length; i++) {
     let obj = objects[i];
     let div = document.createElement("div");
     div.style.backgroundColor = obj.color;
     div.style.height = obj.height + "px";
     div.style.width = obj.width + "px";
     container.appendChild(div);
   }
