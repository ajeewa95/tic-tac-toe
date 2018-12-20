document.addEventListener("DOMContentLoaded", function(){
console.log(this);
});
//add counters (X and 0)

var squares = document.getElementsByTagName("td");


for (var i = 0; i < squares.length; i++) {
  var squares = squares[i]
  square.addEventListener("click", function(event){
    console.log(this.value + " was clicked");
  });
}
