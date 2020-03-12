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
	// let ans = prompt('Введите число');
	// let reg = /\d/g;
	// // console.log(reg.test(ans));

	// console.log(ans.match(reg));

	// // let pass =prompt("Введите пароль");
	// // console.log(pass.replace(/./g, "*"));
	// // alert("12-34-56".replace(/-/g, ":"));

	let str = "My name is/ R2D2";
	console.log(str.match(/\ /i));
});

