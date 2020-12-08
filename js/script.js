const navBar = document.querySelector(".nav-bar");

if( window.screen.width > 480){
var activeLinks = [] ;
let firstLink = navBar.children[0].children[0];


activeLinks.push(firstLink);


window.addEventListener('load', ()=> {
	firstLink.parentNode.style.borderBottom = "3px solid white";
	firstLink.parentNode.style.marginBottom = "-3px";

})

navBar.addEventListener('click', (e)=> {
	if(e.srcElement.localName === 'a'){
		if(activeLinks != 0){
			let el = activeLinks.pop();
			el.parentNode.style.borderBottom = "none";
			el.parentNode.style.marginBottom = "0px";
		}
		activeLinks.push(e.target);
		e.target.parentNode.style.borderBottom = "3px solid white";
		e.target.parentNode.style.marginBottom = "-3px";
	}

})

}


const burgerLines = document.querySelectorAll('.burger-line');





const burger = document.getElementsByClassName('burger')[0];


burger.addEventListener('click', () => {
	if(!burgerLines[0].classList.contains('close')){
		burgerChange();
		navBar.classList.add('nav-resp');
		

	}
	else {
		burgerUnchange();
		navBar.classList.remove('nav-resp');
}
	
})


function burgerChange() {
	burgerLines[1].style.display = "none";
	burgerLines[0].classList.add("close");
	burgerLines[2].classList.add("close");
	burgerLines[0].classList.add("close-1");
	burgerLines[2].classList.add("close-2");
}

function burgerUnchange() {
	burgerLines[1].style.display = "block";
	burgerLines[0].classList.remove("close");
	burgerLines[2].classList.remove("close");
	burgerLines[0].classList.remove("close-1");
	burgerLines[2].classList.remove("close-2");

}

