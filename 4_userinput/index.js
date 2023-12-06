// How to accept user input
//Easy way a windows prompt
//let username = window.prompt("What is your name?");
//console.log(username);
//difficult way html textbox

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;    
    document.getElementById("myLabel").innerHTML = "Hi " + username;
}