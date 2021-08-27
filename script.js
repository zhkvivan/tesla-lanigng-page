document.querySelector('.menu-button').addEventListener('click', function () {
	let menu = document.querySelector('.menu');
	menu.style.transform = 'translateY(0px)';
});

document
	.querySelector('.menu-close-button')
	.addEventListener('click', function () {
		let menu = document.querySelector('.menu');
		menu.style.transform = 'translateY(-800px)';
	});
