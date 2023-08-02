function ChangeSlide(sens){ 
	
	// en cliquant sur les flèches
    index = index + sens;

	// boucle à l'infini
	if (index > slides.length-1)
	index = 0;
	
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
}


onclick="ChangeSlide(-1)"
onclick="ChangeSlide(1)"









