var x = 0;
var y = 0;

draw_circle = "";
draw_rect = "";

var speech_recognition = window.webkitSpeechRecognintion;
var recognition = new SpeechRecognition();
function start(){
document.getElementsById("status").innerHTML = "system is listening please speak";
recognintion.start();
recognintion.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "the speech has been recoreded as " + content;
    if(content == "circle"){
x = Math.floor(math.random() *900);
y = Math.floor(math.random() *600);
document.getElementById("status").innerHTML = "started drawing circle";
draw_circle = "set";

    }
}
}