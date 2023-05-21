
let largeurWindow=window.innerWidth;
let hauteurWindow=window.innerHeight;

const setWidthPopup = (largeur,hauteur) => {
    if(largeur > hauteur){
        return 0.8 * hauteur + "px";
    } else {
        return 0.8 * largeur + "px";
    }
}

const setWindowHeight = () => {
    return hauteurWindow + "px";
}

const root =document.documentElement;
root.style.setProperty("--dimensionPopup", setWidthPopup(largeurWindow,hauteurWindow));
root.style.setProperty("--windowHeight", setWindowHeight()); 


const resetWidthPopup = () => {
    largeurWindow=window.innerWidth;
    hauteurWindow=window.innerHeight;
    root.style.setProperty("--dimensionPopup", setWidthPopup(largeurWindow,hauteurWindow));
    root.style.setProperty("--windowHeight", setWindowHeight()); 
}

window.onresize=resetWidthPopup;

// console.log(setWidthPopup(largeurWindow,hauteurWindow));

// console.log(largeurWindow);


const buttonPopup = document.getElementById("buttonPopup");
const popup = document.getElementById("popup");


buttonPopup.addEventListener("click", () => {
    popup.style.display="none";
})