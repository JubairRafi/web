
var myKey1 =prompt("enter player1's choice");
var myKey2 =prompt("enter player2's choice");
var flag = 0;
var player1score = 0;
var player2score = 0;
var menu = "Press (0) to rematch..........................Press (s) to reset score..........................Press (b) for scoreBoard";
document.addEventListener("keypress",function(event){

  gamePlay();

});

function gamePlay(){
  if (event.key==0) {
    resetboard();
  }else if (event.key=="s") {
    resetScore();
  }else if (event.key == "b") {
    scoreBoard();
  }
   else {
    if (flag==0) {
      player1();
    } else {
      player2();
    }
  }
}

function player1(){
  flag = 1;
  var player1win = gameLogic(myKey1);
  if (player1win) {
         document.querySelector(".rematch").innerHTML="<strong>player 1 wins</strong>";
          player1score = player1score + 1;
          setTimeout(function(){
             document.querySelector(".rematch").textContent=menu; }, 3000);
          resetboard();
          scoreBoard();
   }

}

function player2(){
  flag = 0;
  var player2win = gameLogic(myKey2);
  if (player2win) {
          document.querySelector(".rematch").innerHTML="<strong>player 2 wins</strong>";
          player2score = player2score + 1;

           setTimeout(function(){
              document.querySelector(".rematch").textContent=menu; }, 3000);
           resetboard();
           scoreBoard();
  }
}


function gameLogic(myKey){

  if (event.key=="1") {

          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i+1].textContent == myKey && key[i+2].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey) ||(key[i+4].textContent == myKey && key[i+8].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="2") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == myKey && key[i+1].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey)  ) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="3") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-1].textContent == myKey && key[i-2].textContent == myKey) ||(key[i+3].textContent == myKey && key[i+6].textContent == myKey)||(key[i+4].textContent == myKey && key[i+2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="4") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i+1].textContent == myKey && key[i+2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="5") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i-2].textContent == myKey)||(key[i-i].textContent == myKey && key[i+i].textContent == myKey) ||(key[i+2].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="6") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-3].textContent == myKey && key[i+3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="7") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-i].textContent == myKey && key[i-3].textContent == myKey) ||(key[i+1].textContent == myKey && key[i+2].textContent == myKey) ||(key[i-4].textContent == myKey && key[i-2].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="8") {
          let i = doMove(myKey);

          let key =document.querySelectorAll(".key");

          if ((key[i-6].textContent == myKey && key[i-3].textContent == myKey) ||(key[i-1].textContent == myKey && key[i+1].textContent == myKey)) {
              return true;
          }else{
              return false;
          }

  } else if (event.key=="9") {
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
      document.querySelectorAll(".key")[i].textContent = myKey;
      return i;
    }
  }
}

function resetboard(){
  setTimeout(function(){
        for (var i = 0; i < document.querySelectorAll(".reset").length; i++) {
            document.querySelectorAll(".reset")[i].textContent = i+1;
          }
          if (flag == 0) {
              flag = 1;
          } else {
            flag = 0;
          }
    }, 800);
}

function scoreBoard(){
      var board = document.querySelectorAll(".board");
      for (var i = 0; i < board.length; i++) {
        if (i==0) {
          board[i].classList.add("score");
          board[i].textContent="player1 score: "+player1score;
        } else {
          board[i].classList.add("score");
          board[i].classList.add("p2");
          board[i].textContent="player2 score: "+player2score;
        }
      }
      setTimeout(function(){
        for (var i = 0; i < board.length; i++) {
          if (i==0) {
            board[i].classList.remove("score");
            board[i].textContent="";
          } else {
            board[i].classList.remove("score");
            board[i].classList.remove("p2");
            board[i].textContent="";
          }
        }
      }, 3500);
}

function resetScore(){
  player1score=0;
  player2score=0;
}
