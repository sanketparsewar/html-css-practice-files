// entire google chrome is window
// if window is resize
window.onresize=screen;
// window loads live and value changes for the size of screen
window.onload=screen;

function screen(){
    myWidth=window.innerWidth;

    // to target the id use document.getelementByid
    // here innerHtml is used to insert the text
    document.getElementById('size').innerHTML="width:" +myWidth +" px";

}