
const label = document.getElementsByClassName("myLabel")
const slider = document.getElementById("mySlider");

const main  = function (x){
    const angle  = x.beta;
    const distToObject = slider.value;
    

    console.log(distToObject);
    if(angle>0 && angle<90){
    console.log(angle);
    const height = Math.tan(angle*Math.PI/180)*distToObject;
    label[2].innerHTML = distToObject;
    label[0].innerHTML= "Angle of Object top   :    " +angle.toFixed(2) +"&deg";
    label[1].innerHTML = "Height of Object   :    " + height.toFixed(2) + "  m";
    

    }
}

window.addEventListener("deviceorientation",main);