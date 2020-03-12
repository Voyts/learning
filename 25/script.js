// window.addEventListener('DOMContentLoaded', function () {
// 	let box = document.querySelector('.box');

// 	// box.addEventListener('touchstart', function (e) {
// 	// 		e.preventDefault();
// 	// 		console.log('Red Box: touchstart');
// 	// 		console.log(e.touches[0].target);
// 	// 		console.log(e.changeTouches);
// 	// 		console.log(e.targetTouches);
// 	// });
	
	
// 	// box.addEventListener('touchmove', function (e) {
// 	// 		e.preventDefault();
// 	// 		console.log('Red Box: touchmove' + e.touches[0].pageX);
// 	// });

// // 	box.addEventListener('touchend', function (e) {
// // 		e.preventDefault();
// // 		console.log('Red Box: touchend');
// // 	});
// 	// new RegExp('pattern', 'flags');
// 	// /pattern/
// 	// let ans = prompt('Введите число');
// 	// let reg = /\d/g;
// 	// // console.log(reg.test(ans));

// 	// console.log(ans.match(reg));

// 	// // let pass =prompt("Введите пароль");
// 	// // console.log(pass.replace(/./g, "*"));
// 	// // alert("12-34-56".replace(/-/g, ":"));

// 	let str = "My name is/ R2D2";
// 	console.log(str.match(/\ /i));
// });

let box = document.querySelector('.box'),
	btn = document.querySelector('button');

	let width = box.clientWidth,
	height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

	btn.addEventListener('click', function () {
		box.scrollTop = 0;


	});

	scrollBy(0, 200);