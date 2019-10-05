
function setUpEvents(){

    var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function (){
    if (content.className == "open") {
    // shrink //
    content.className = "";
} else {
    // expand //
    content.className = "open"; 
    button.innerHTML = "SHOW LESS";

}
};

}



window.onload = function(){

    this.setUpEvents(); 
    
};