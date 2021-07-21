var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlengthCheck() {
    if(input.value.length >  0 ) {
        return true;
    }
    return false;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputlengthCheck()) {
        createListElement();
    }   
}
function addListAfterKeypress(event) {
    console.log("event is :::: ",event)
    if(inputlengthCheck() && event.keyCode == 13) {
        createListElement();
    }   
} 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)