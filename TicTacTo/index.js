
var myKey =prompt("enter you choice");
document.addEventListener("keypress",function(event){
  if (event.key=="w") {

          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i+1].textContent == "myKey" && key[i+2].textContent == "myKey") ||(key[i+3].textContent == "myKey" && key[i+6].textContent == "myKey") ||(key[i+4].textContent == "myKey" && key[i+8].textContent == "myKey")) {
              alert("game win 0");
          }

  } else if (event.key=="a") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == "o" && key[i+1].textContent == "o") ||(key[i+3].textContent == "o" && key[i+6].textContent == "o")  ) {
              alert("game win 0");
          }

  } else if (event.key=="s") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == "o" && key[i-2].textContent == "o") ||(key[i+3].textContent == "o" && key[i+6].textContent == "o")||(key[i+4].textContent == "o" && key[i+2].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="d") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == "o" && key[i+3].textContent == "o") ||(key[i+1].textContent == "o" && key[i+2].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="f") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == "o" && key[i+3].textContent == "o") ||(key[i-1].textContent == "o" && key[i-2].textContent == "o")||(key[i-i].textContent == "o" && key[i+i].textContent == "o") ||(key[i+2].textContent == "o" && key[i-2].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="g") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == "o" && key[i+3].textContent == "o") ||(key[i-1].textContent == "o" && key[i-2].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="h") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-i].textContent == "o" && key[i-3].textContent == "o") ||(key[i+1].textContent == "o" && key[i+2].textContent == "o") ||(key[i+4].textContent == "o" && key[i+2].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="j") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-6].textContent == "o" && key[i-3].textContent == "o") ||(key[i-1].textContent == "o" && key[i+1].textContent == "o")) {
              alert("game win 0");
          }

  } else if (event.key=="k") {
          let i = doMove();

          let key =document.querySelectorAll(".key");

          if ((key[i-i].textContent == "o" && key[i-4].textContent == "o") ||(key[i-3].textContent == "o" && key[i-6].textContent == "o") ||(key[i-1].textContent == "o" && key[i-2].textContent == "o")) {
              alert("game win 0");
          }

  }

  function doMove(){
    for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
      if (document.querySelectorAll(".key")[i].textContent == event.key ) {
        document.querySelectorAll(".key")[i].textContent ="o";
        return i;
      }
    }
  }







});
