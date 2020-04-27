// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();


  // Get lis from ul
  let li = document.querySelectorAll('.collection-item');

  // Loop for h2
  for(let i = 0;i < li.length;i++){
    let h2 = document.getElementsByTagName('h2')[i];
    // If matched
    if(h2.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

}
