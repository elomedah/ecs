// Create variables here
// ========================================
let articleName = "Tablette";
let articlePrice = 120;
let isPaid = true;


// =========================================


document.addEventListener('DOMContentLoaded', function(){
	document.querySelector('#info').innerText = `Article: ${articleName}
	Prix: ${articlePrice} Euros
	Déjà payé : ${isPaid ? 'Oui' : 'Non'}`
});