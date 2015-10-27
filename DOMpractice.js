console.log('linked')


document.getElementsByClassName("box")[0].addEventListener("click", function(e){
  et = e.target;
  et.style.backgroundColor = "blanchedAlmond";
  et.style.position = "relative";
  et.style.top = "100px";
});


