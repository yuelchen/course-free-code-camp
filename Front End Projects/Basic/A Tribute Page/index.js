function show(x){
  var id = x + "-details";
  var details = "#" + x + "-details";
  var display = document.getElementById(id).style.display;
  if(display == "block")
    $( details ).slideUp();
  else
    $( details ).slideDown();
}
