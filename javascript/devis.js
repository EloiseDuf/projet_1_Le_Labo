//Récupération des données issues de la page contact
const objetsOptionsSelectionnees=JSON.parse(localStorage.getItem("objetsOptionsSelectionnees"));
const donneesFormulaire=JSON.parse(localStorage.getItem("donneesFormulaire"));

console.log(objetsOptionsSelectionnees);
console.log(donneesFormulaire);

const nomPrenom =document.getElementById('nomPrenom');
// const email =document.getElementById('email');
const adresse =document.getElementById('adresse');
const codeVille =document.getElementById('code-ville');
const pays =document.getElementById('pays');
const dateDevis = document.getElementById('dateDevis');
const numDevis =document.getElementById('numDevis');
const totalHT =document.getElementById('totalHT');
const totalTTC =document.getElementById('totalTTC');
// const tel =document.getElementById('tel');


//on remplit les champs de données
nomPrenom.innerHTML=donneesFormulaire.prenom + " " + donneesFormulaire.nom;
adresse.innerHTML=donneesFormulaire.adresse;
codeVille.innerHTML=donneesFormulaire.codePostal + " " + donneesFormulaire.ville;
pays.innerHTML=donneesFormulaire.pays;

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Les mois sont indexés à partir de 0
const day = today.getDate();

dateDevis.innerHTML= `Le ${day}/${month}/${year}`;
numDevis.innerHTML = "Devis N° : " + Math.round(Math.random() * 10000);

//affichons maintenant dans le tableau les options commandées par le client
const tableau=document.querySelector("table");
let prixtotalHT=0; // pour calculer le prix total

for(let i in objetsOptionsSelectionnees){
    console.log(objetsOptionsSelectionnees[i]);
    const newLigne=document.createElement("tr");
    newLigne.id =`ligne${i}`;
    let prix;
    for(let parametre in objetsOptionsSelectionnees[i]){
        console.log(parametre);
        console.log(objetsOptionsSelectionnees[i][parametre])
        if(parametre==="option" || parametre==="prix"){
            const newTd = document.createElement('td');
            newTd.id=parametre + i;
            newTd.innerHTML=objetsOptionsSelectionnees[i][parametre];
            newLigne.appendChild(newTd);
            if(parametre==="prix"){
                prix=objetsOptionsSelectionnees[i][parametre];
                prixtotalHT += prix;
            }
        }
    }
    const newTd = document.createElement('td');
    newTd.innerHTML=1;
    newLigne.appendChild(newTd);
    tableau.appendChild(newLigne);
    const newTd1 = document.createElement('td');
    newTd1.innerHTML=prix;
    newLigne.appendChild(newTd1);
    tableau.appendChild(newLigne);
}


//affichons le cout total des opérations HT et TTC
totalHT.innerHTML=prixtotalHT + " gill";
totalTTC.innerHTML=prixtotalHT * 1.2 + " gill";

