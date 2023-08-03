const slides = [
	{   "image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{	"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{	"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{	"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récuprération éléments DOM

const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector("p");
let btnArrowRight = document.querySelector(".arrow_right");
let btnArrowLeft = document.querySelector(".arrow_left");


// Ajoutez des bullet points au slider

let indicators = document.querySelector(".dots");

let Dot1 = document.createElement("div");
Dot1.classList.add("dot")
Dot1.classList.add("dot_selected")
indicators.appendChild(Dot1);

let Dot2 = document.createElement("div");
Dot2.classList.add("dot")
indicators.appendChild(Dot2);

let Dot3 = document.createElement("div");
Dot3.classList.add("dot")
indicators.appendChild(Dot3);

let Dot4 = document.createElement("div");
Dot4.classList.add("dot")
indicators.appendChild(Dot4);


let index = 0; // slide par défaut

btnArrowLeft.addEventListener("click", () => {
	// en cliquant sur la flèche gauche
    index = index -1;

	// boucle à l'infini : retour à la slide 4
	
	if (index < 0)
	index = slides.length-1;
	
	// Afficher la slide demandée
	imageElement.src = slides[index].image;

	// Afficher le texte correspondant
	tagLineElement.innerHTML = slides[index].tagLine;
	console.log(index)

	// Retirer la classe dot_selected du bullet point actif
	let dots = document.getElementsByClassName("dot");
	for(let i =0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}

	// Ajouter la classe dot_selected sur le bullet point suivant
	dots[index].classList.add("dot_selected");
	});
				
				
btnArrowRight.addEventListener("click", () => {
	// en cliquant sur la flèche droite
    index = index + 1;

	// boucle à l'infini : retour à la slide 1
	if (index > slides.length-1)
	index = 0;
	
	// Afficher la slide demandée
	imageElement.src = slides[index].image;

	// Afficher le texte correspondant
	tagLineElement.innerHTML = slides[index].tagLine;
	

	// Retirer la classe dot_selected du bullet point actif
	let dots = document.getElementsByClassName("dot");
	for(let i =0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected");
	}

	// Ajouter la classe dot_selected sur le bullet point suivant
	dots[index].classList.add("dot_selected");
	});
	