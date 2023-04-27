const box = document.querySelector('.box');
const colors = ['blue', 'red', 'green', 'yellow', 'blue', 'orange'];
const handleChangeBorderColor = () => {
	const randomColor = Math.floor(Math.random() * colors.length);
	box.style.borderColor = colors[randomColor];
};
const colorInterval = setInterval(handleChangeBorderColor, 3000);
