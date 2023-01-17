for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // console.log(i, this.innerHTML)
    path = getPath(this.innerHTML)
    var audio = new Audio(path);
    audio.play();
    btnAnimation(this.innerHTML)
  });
}
document.addEventListener("keydown", function(event){
    // alert("key press detected "+ event)
    // console.log(event.key)
    path = getPath(event.key)
    if(path!=="0"){
        var audio = new Audio(path);
        audio.play();
        btnAnimation(event.key)
    }
    
})

function getPath(c){
    switch (c) {
        case "w":
          path = "./sounds/tom-1.mp3";
          break;
        case "a":
          path = "./sounds/tom-2.mp3";
          break;
        case "s":
          path = "./sounds/tom-3.mp3";
          break;
        case "d":
          path = "./sounds/tom-4.mp3";
          break;
        case "j":
          path = "./sounds/snare.mp3";
          break;
        case "k":
          path = "./sounds/crash.mp3";
          break;
        case "l":
          path = "./sounds/kick-bass.mp3";
          break;
        default:
            path="0"
      }
      return path
}

function btnAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey)
    activeBtn.classList.add("pressed")
    setTimeout(() => {
        activeBtn.classList.remove("pressed")   
    }, 100);
    

}