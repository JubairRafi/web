document.addEventListener("click",function(){

  var random1 = Math.floor(Math.random()*3)+1;
  var random2 = Math.floor(Math.random()*3)+1;

  var movePic1 = "move" + random1 + ".png";
  var movePic2 = "move" + random2 + ".png";

  var source1 = "images/" + movePic1;
  var source2 = "images/" + movePic2;

  document.querySelector(".img1").setAttribute("src",source1);
  document.querySelector(".img2").setAttribute("src",source2);

      if((random1 == 1 && random2 == 2) || (random1 == 2 && random2 == 3) || (random1 == 3 && random2 == 1)){
        document.querySelector("h3").innerHTML = "Click Anywhere to Play";
        document.querySelector("h1").innerHTML = "Player 2 wins";
      }
      else if ((random1 == 1 && random2 == 3) || ( random1 == 2 && random2 == 1) || (random1 == 3 && random2 == 2)) {
        document.querySelector("h3").innerHTML = "Click Anywhere to Play";
        document.querySelector("h1").innerHTML = "Player 1 wins";
      }

      else{
        document.querySelector("h3").innerHTML = "Click Anywhere to Play";
        document.querySelector("h1").innerHTML = "Draw!!";
      }

});
