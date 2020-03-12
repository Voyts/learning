window.addEventListener('DOMContentLoaded', function () {
	let box = document.querySelector('.box');

	// box.addEventListener('touchstart', function (e) {
	// 		e.preventDefault();
	// 		console.log('Red Box: touchstart');
	// 		console.log(e.touches[0].target);
	// 		console.log(e.changeTouches);
	// 		console.log(e.targetTouches);
	// });
	
	
	// box.addEventListener('touchmove', function (e) {
	// 		e.preventDefault();
	// 		console.log('Red Box: touchmove' + e.touches[0].pageX);
	// });

// 	box.addEventListener('touchend', function (e) {
// 		e.preventDefault();
// 		console.log('Red Box: touchend');
// 	});
	// new RegExp('pattern', 'flags');
	// /pattern/
	let ans = prompt('Введите ваше имя');
	let reg = /n/;

	console.log(ans.search(reg));

	
});

