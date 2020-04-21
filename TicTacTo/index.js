

document.addEventListener("keypress",function(event){
  if (event.key=="w") {
      for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
        if (document.querySelectorAll(".key")[i].textContent == "w" ) {
          document.querySelectorAll(".key")[i].textContent ="o";
        }
      }
  } else {
      alert("wrong input");
  }
});
