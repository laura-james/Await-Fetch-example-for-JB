async function getdata(param){
  var msg = "";
  console.log("About to fetch from "+"https://flaskfromscratch.laurajamesbcs.repl.co/ajaxtest?param="+param)
  const response = await fetch("https://flaskfromscratch.laurajamesbcs.repl.co/ajaxtest?param="+param);
  const movies = await response.json();
  for (var i = 0; i<movies.length; i++){
    console.log(movies[i])
    msg = msg +"<div class='row'>"+movies[i]+"</div>"
  }
  
  document.getElementById("stuff").innerHTML = msg;
}


/*
Had to allow Cross Origin Request header on this other replit site using this method
https://stackoverflow.com/questions/20035101/why-does-my-javascript-code-receive-a-no-access-control-allow-origin-header-i
*/

function clearResults(){
  console.log("clear")
  document.getElementById("stuff").innerHTML = "";
}