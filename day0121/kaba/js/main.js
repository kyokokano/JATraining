'use strict';
window.onload=()=>{
	let images=document.getElementsByClassName('headerImage');
	let zIndexMax=0;
	let zIndexChange=(eve)=>{eve.target.style.zIndex=++zIndexMax;};
	let xChange=eve=>{
		//console.dir(eve.target);
		eve.target.style.transform='translateX(10px)';;
	};
	for(let i=0;i<images.length;i++){
		images[i].addEventListener('click',zIndexChange);
		images[i].addEventListener('mouseover',xChange);
	}
};
