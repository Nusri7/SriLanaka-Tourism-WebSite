

var i = 0;
var txt = "Pearl of the Indian Ocean";
var speed = 80;


function typeWriter() {

    document.getElementById("test").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);


}
typeWriter();


