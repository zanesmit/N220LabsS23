let coolThing = document.getElementById("coolThing");

function checkResponse(time){
  if(time == "morning"){
    coolThing.innerHTML= "correct";
  }
  else{
   coolThing.innerHTML = "Try Again";
  }
}