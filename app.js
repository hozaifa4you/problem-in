//Colors
var colors = [
    "rgb(0,255,255)",
    "rgb(138,43,226)",
    "rgb(0,139,139)",
    "rgb(255,20,147)",
    "rgb(0,191,255)",
    "rgb(70,130,180)"
];

//Squares
var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".show-colors");
var notice = document.querySelector(".notice");
//random colors
var colorPicker = colors[2];


displayColor.textContent = colorPicker;
//square loop

for (let index = 0; index < square.length; index++) {
    square[index].style.background = colors[index];
    square[index].addEventListener("click", function() {
        //compair Color
        var compairWith = String(this.style.backgroundColor);


        //Help Me!! my condition is not working. whay?

        //from there
        if (colorPicker === compairWith) {
            console.log("You are right.");
        } else {
            console.log("You are wrong.");
        }

        //than
    });
}