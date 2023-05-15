
//Récupération des data stockées dans body-option.json
const data = require('./body-option.json');

// console.log(data[1].option);

//récupération dans un array de la catégorie des body-option
const dataCategorie = data.map(bodyOption => bodyOption.categorie);
const categorie = Array.from(new Set(dataCategorie));
const option = data.map(bodyOption => bodyOption.option);

console.log(categorie);