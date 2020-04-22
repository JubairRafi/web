
var myKey1 =prompt("enter player1's choice");
var myKey2 =prompt("enter player2's choice");
var flag = 0;
document.addEventListener("keypress",function(event){


  if (flag==0) {
    player1();
  } else {
    player2();
  }


});

function player1(){
  flag = 1;
  var player1win = gameLogic(myKey1);
  if (player1win) {
      alert("player1 wins");
   }
}

function player2(){
  flag = 0;
  var player2win = gameLogic(myKey2);
  if (player2win) {
     alert("player2 wins");
  }
}


function gameLogic(myKey){

  if (event.key=="w") {

          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i+1].textContent == myKey && key[i+2].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey) ||(key[i+4].textContent == myKey && key[i+8].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="a") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == myKey && key[i+1].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey)  ) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="s") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == myKey && key[i-2].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey)||(key[i+4].textContent == myKey && key[i+2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="d") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i+1].textContent == myKey && key[i+2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="f") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i-2].textContent == myKey)||(key[i-i].textContent == myKey && key[i+i].textContent == myKey) ||(key[i+2].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="g") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="h") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-i].textContent == myKey && key[i-3].textContent == myKey) ||(key[i+1].textContent == myKey && key[i+2].textContent == myKey) ||(key[i+4].textContent == myKey && key[i+2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="j") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-6].textContent == myKey && key[i-3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i+1].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="k") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-i].textContent == myKey && key[i-4].textContent == myKey) ||(key[i-3].textContent == myKey && key[i-6].textContent == myKey) ||(key[i-1].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else{
    alert("please enter right key");
  }

}


function doMove(myKey){
  for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
    if (document.querySelectorAll(".key")[i].textContent == event.key ) {
      document.querySelectorAll(".key")[i].textContent =myKey;
      return i;
    }
  }
}
