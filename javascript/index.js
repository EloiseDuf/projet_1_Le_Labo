document.body.style.overflow = "hidden";

//récupération de la largeur et la hauteur de la fenêntre du navigateur
let largeurWindow=window.innerWidth;
let hauteurWindow=window.innerHeight;


//fonction renvoyant une largeur de popup en px en fonction de la taille de la fenetre
const setWidthPopup = (largeur,hauteur) => {
    if(largeur > hauteur){
        return 0.8 * hauteur + "px";
    } else {
        return 0.8 * largeur + "px";
    }
}

//fonction renvoyant la hauteur de la fenetre en px
const setWindowHeight = () => {
    return hauteurWindow + "px";
}

//attribution des largeurs et hauteurs de fenêtre à des variables CSS
const root =document.documentElement;
root.style.setProperty("--dimensionPopup", setWidthPopup(largeurWindow,hauteurWindow));
root.style.setProperty("--windowHeight", setWindowHeight()); 


// fonction donnant les actions à faire lorsque la fenetre du navigateur est redimensionnée
const resetWidthPopup = () => {
    largeurWindow=window.innerWidth;
    hauteurWindow=window.innerHeight;
    root.style.setProperty("--dimensionPopup", setWidthPopup(largeurWindow,hauteurWindow));
    root.style.setProperty("--windowHeight", setWindowHeight()); 
}

//on appelle la fonction lorsque la fenêtre est redimensionnée
window.onresize=resetWidthPopup;




//on cache le popup lorsqu'on clique sur le bouton
const buttonPopup = document.getElementById("buttonPopup");
const popup = document.getElementById("popup");


buttonPopup.addEventListener("click", () => {
    popup.style.display="none";
    document.body.style.overflow = "auto";
})