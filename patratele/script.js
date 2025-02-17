const Green = document.querySelector(".greenClass");
const Red= document.querySelector(".redClass");

Green.addEventListener('click', (e) =>     {
    greenFunction(); 
});

Red.addEventListener('click', (e) =>    {
    redFunction();
});

function greenFunction() {
    const greenDiv = document.getElementById("green");
    const greenElement = greenDiv.cloneNode(true);
    greenElement.addEventListener('click', greenFunction);
    document.body.appendChild(greenElement);
    console.log("asdads1");
}

function redFunction() {
    const redSquare = document.querySelector(".redClass");
    redSquare.style.display = "none";
    console.log(redSquare);
}



    // const redSquares= document.getElementsByClassName("red");
    // for(const i in redSquares) {
    //     i.style.display = "none";
    //     break;
    // }