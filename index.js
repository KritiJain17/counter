const dec = document.getElementById("dec");
const inc = document.getElementById("inc");
const reset = document.getElementById("reset");
//let value = document.querySelector("#value");
let count =0;

dec.addEventListener("click", function(){
  count--;
  value.textContent = count;
});

inc.addEventListener("click", function(){
  /*let v=value+1;
  value.textContent = v;*/
  count++;
  value.textContent = count;
});

reset.addEventListener("click", function(){
  count = 0;
  value.textContent = count;
});


