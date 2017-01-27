const hero = document.querySelector(".text-area");
const text = hero.querySelector("h1");


function shadow(e){
	const width = hero.offsetWidth;
	const height = hero.offsetHeight;
	const walk = 30; 
	let { offsetX: x, offsetY: y} = e;
	
	if (this !== e.target){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;	
	}
	const xWalk = Math.round((x / width * walk) - (walk / 2));
	const yWalk = Math.round((x / height * walk)-(walk / 2));
	
text.style.textShadow = `
${xWalk}px ${yWalk}px 0 rgba(25,25,112,0.7)
`;				
}

hero.addEventListener("mousemove", shadow);