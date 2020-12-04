const navBar = document.querySelector(".nav-bar");
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
