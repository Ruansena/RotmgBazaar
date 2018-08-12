const bag = document.querySelector(".bag");

const next = document.querySelector(".next-arrow"); // catch a next arrow
const previous = document.querySelector(".previous-arrow"); // catch a previous arrow
const slideBoxItems = document.querySelectorAll(".slideBox-item"); // catch todos itens do slide
const slideBoxNav = document.querySelectorAll(".slideBox-navItem"); // catch itens da lista do slide *nao usei ainda*
let currentItem = 0; // seta o contador do slide
slideBoxItems[0].classList.add("current-slideItem"); // seta o item atual
slideBoxNav[0].classList.add("current-navItem");
let slideBehavior = true;

setInterval(handleNavSlide, 4000);

previous.addEventListener("click", previousSlide);
next.addEventListener("click", nextSlide);

function nextSlide(){
	slideBoxItems[currentItem].classList.remove("current-slideItem"); // remove a class current do item atual
	slideBoxNav[currentItem].classList.remove("current-navItem");
	(currentItem == slideBoxItems.length-1 ? currentItem = 0 : currentItem++); //se o item atual tiver no limite, volte para 0, se não continue +1
	slideBoxItems[currentItem].classList.add("current-slideItem"); //adiciona no item da frente
	slideBoxNav[currentItem].classList.add("current-navItem");
	slideBehavior = true;
}
function previousSlide(){
	slideBoxItems[currentItem].classList.remove("current-slideItem"); // remove a class current do item atual
	slideBoxNav[currentItem].classList.remove("current-navItem");
	(!(currentItem) ? currentItem = slideBoxItems.length-1 : currentItem--); //se o item atual tiver no começo, vá para o limite, se não continue -1
	slideBoxItems[currentItem].classList.add("current-slideItem"); // adiciona a class no item anterior
	slideBoxNav[currentItem].classList.add("current-navItem");
	slideBehavior = false;
}
function handleNavSlide(){
	if(slideBehavior){
		nextSlide();
	} else {
		previousSlide();
	}
}

// function toggleSlide(e){
// 	if(e.target.classList.contains("next-arrow")) { //Checa se o evento veio da seta de "proximo"
// 		slideBoxItems[currentItem].classList.remove("current-slideItem"); // remove a class current do item atual
// 		slideBoxNav[currentItem].classList.remove("current-navItem");
// 		(currentItem == slideBoxItems.length-1 ? currentItem = 0 : currentItem++); //se o item atual tiver no limite, volte para 0, se não continue +1
// 		slideBoxItems[currentItem].classList.add("current-slideItem"); //adiciona no item da frente
// 		slideBoxNav[currentItem].classList.add("current-navItem");
// 	} else { //Se nao for o proximo é o anterior ue ^-^
// 		slideBoxItems[currentItem].classList.remove("current-slideItem"); // remove a class current do item atual
// 		slideBoxNav[currentItem].classList.remove("current-navItem");
// 		(!(currentItem) ? currentItem = slideBoxItems.length-1 : currentItem--); //se o item atual tiver no começo, vá para o limite, se não continue -1
// 		slideBoxItems[currentItem].classList.add("current-slideItem"); // adiciona a class no item anterior
// 		slideBoxNav[currentItem].classList.add("current-navItem");
// 	}
// }

// function nextItem(){
// 	console.log(slideBoxItems);
// 	for(let i = 0; i < slideBoxItems.length; i++) {
// 		if (slideBoxItems[i].classList.contains("current-slideItem")) {
// 			slideBoxItems[i].classList.remove("current-slideItem");
// 			slideBoxItems[i+1].classList.add("current-slideItem");
// 			return;
// 		}
// 	}
// }

// function previousItem(){
// 	console.log(slideBoxItems);
// 	for(let i = slideBoxItems.length -1; i > 0; i--) {
// 		if (slideBoxItems[i].classList.contains("current-slideItem")) {
// 			slideBoxItems[i].classList.remove("current-slideItem");
// 			slideBoxItems[i - 1].classList.add("current-slideItem");
// 			return;
// 		}
// 	}
// }