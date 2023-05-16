
//Récupération des data stockées dans body-option.json
//const data = require('./body-option.json');

const data=[
    {
        "option":"Oeil bionique",
        "categorie":"yeux",
        "chirurgien":"chir1",
        "prix":5000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Oeil mécanique",
        "categorie":"yeux",
        "chirurgien":"chir1",
        "prix":7500,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Oeil de chat",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":3000,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Oeil de mouche",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":4500,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Oeil de guêpe",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":3500,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Gros yeux",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":7800,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Yeux derrière la tête",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":10500,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Yeux tentacules(x8)",
        "categorie":"yeux",
        "chirurgien":"chir2",
        "prix":23000,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Bras bionique",
        "categorie":"bras",
        "chirurgien":"chir1",
        "prix":18000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Bras mécanique",
        "categorie":"bras",
        "chirurgien":"chir1",
        "prix":28000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Bras extensible",
        "categorie":"bras",
        "chirurgien":"chir3",
        "prix":18000,
        "forfaitChirurgien":1200
    }
    ,
    {
        "option":"Bras écran",
        "categorie":"bras",
        "chirurgien":"chir1",
        "prix":15000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Bras amovible",
        "categorie":"bras",
        "chirurgien":"chir1",
        "prix":33000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Jambe bionique",
        "categorie":"Jambe",
        "chirurgien":"chir1",
        "prix":18000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Jambe mécanique",
        "categorie":"Jambe",
        "chirurgien":"chir1",
        "prix":28000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Jambe extensible",
        "categorie":"Jambe",
        "chirurgien":"chir3",
        "prix":18000,
        "forfaitChirurgien":1200
    }
    ,
    {
        "option":"Jambe écran",
        "categorie":"bras",
        "chirurgien":"chir1",
        "prix":15000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Jambe amovible",
        "categorie":"Jambe",
        "chirurgien":"chir1",
        "prix":33000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Jambe roue",
        "categorie":"Jambe",
        "chirurgien":"chir1",
        "prix":17000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Corne de démon",
        "categorie":"corne",
        "chirurgien":"chir4",
        "prix":8000,
        "forfaitChirurgien":700
    }
    ,
    {
        "option":"Corne de licorne",
        "categorie":"corne",
        "chirurgien":"chir4",
        "prix":7000,
        "forfaitChirurgien":700
    }
    ,
    {
        "option":"Corne de cerf",
        "categorie":"corne",
        "chirurgien":"chir4",
        "prix":15000,
        "forfaitChirurgien":700
    }
    ,
    {
        "option":"Corne de rhinocéros",
        "categorie":"corne",
        "chirurgien":"chir4",
        "prix":9000,
        "forfaitChirurgien":700
    }
    ,
    {
        "option":"Dents de vampire",
        "categorie":"Dents",
        "chirurgien":"chir5",
        "prix":8000,
        "forfaitChirurgien":900
    }
    ,
    {
        "option":"Dents métalliques",
        "categorie":"Dents",
        "chirurgien":"chir1",
        "prix":11000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Défenses d'éléphant",
        "categorie":"Dents",
        "chirurgien":"chir2",
        "prix":16000,
        "forfaitChirurgien":800
    }
    ,
    {
        "option":"Dents de scie circulaire",
        "categorie":"Dents",
        "chirurgien":"chir1",
        "prix":24000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Peau de lézard",
        "categorie":"Peau",
        "chirurgien":"chir6",
        "prix":18000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Peau de caméléon",
        "categorie":"Peau",
        "chirurgien":"chir6",
        "prix":28000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Ecailles de poisson",
        "categorie":"Peau",
        "chirurgien":"chir6",
        "prix":13000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Ailes d'oiseau",
        "categorie":"Ailes",
        "chirurgien":"chir4",
        "prix":18000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Ailes de chauve souris",
        "categorie":"Ailes",
        "chirurgien":"chir4",
        "prix":16000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Ailes de démon",
        "categorie":"Ailes",
        "chirurgien":"chir4",
        "prix":23000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Ailes robotiques",
        "categorie":"Ailes",
        "chirurgien":"chir1",
        "prix":45000,
        "forfaitChirurgien":1000
    }
    ,
    {
        "option":"Queue de dragon",
        "categorie":"Queue",
        "chirurgien":"chir6",
        "prix":28000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Queue de poisson",
        "categorie":"Queue",
        "chirurgien":"chir6",
        "prix":26000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Queue de chat",
        "categorie":"Queue",
        "chirurgien":"chir6",
        "prix":8000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Queue en tire bouchon",
        "categorie":"Queue",
        "chirurgien":"chir6",
        "prix":7000,
        "forfaitChirurgien":1300
    }
    ,
    {
        "option":"Queue robotique",
        "categorie":"Queue",
        "chirurgien":"chir1",
        "prix":36000,
        "forfaitChirurgien":1000
    }
];


// console.log(data[1].option);

//récupération dans un array de la catégorie des body-option
const dataCategorie = data.map(bodyOption => bodyOption.categorie);
const categories = Array.from(new Set(dataCategorie));
// const option = data.map(bodyOption => bodyOption.option);

const listebox1=document.getElementById('option');

// console.log(listebox1.options);


//-----------------------------------------------------------
//Fonction qui remplit mon select
const listeBoxOptions = (liste) => {
    //création de la premiere ligne type placeholder
    const selectPlaceholder=document.createElement('option');
    selectPlaceholder.selected;
    selectPlaceholder.innerHTML="Choisissez une option";
    liste.appendChild(selectPlaceholder);

    for(let categorie in categories){
        // console.log(categories[categorie])
        const groupeName=document.createElement("optgroup");
        // console.log(groupeName);
        groupeName.label=categories[categorie];
        liste.appendChild(groupeName);
        for(let option in data){
            if(data[option].categorie===categories[categorie]){
                const optionName=document.createElement('option');
                optionName.innerHTML= data[option].option;
                liste.appendChild(optionName);
            }
        }
    }
}
//--------------------------------------------------
listeBoxOptions(listebox1);




//-------------------------------------------------------
//On duplique le select quand une option est choisie
const select = document.querySelector('select');
const container = document.getElementById('choix-options');

select.addEventListener('change', () => {
  const newSelect = select.cloneNode(true);
  container.appendChild(newSelect);
  newSelect.addEventListener('change', newSelectChange);
});

function newSelectChange(event) {
    //suppression de l'event listenner du précédant select
    event.target.removeEventListener('change', newSelectChange);
    //on clone le premier select
    const newSelect = select.cloneNode(true);
    //on l'ajoute au container fieldset
    container.appendChild(newSelect);
    //on applique un event listener au nouveau select créé
    newSelect.addEventListener('change', newSelectChange);
}
//------------------------------------------------------------