/*let options = {
  width: 1024,
  height: 1024,
  name: "test"  
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имееет значение " + options[key]);
}

console.log(Object.keys(options).length);

let arr = ["first", 2, 3, "four", 5]

//arr [99] = 99;

//for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}
arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});

console.log(arr);

let mass = [1,3,4,6,7];

for (let key in mass) {
    console.log(key);
}
*/

//let ans = prompt ("", ""),
//    arr = [];
//
//arr = ans.split(',');
//console.log(arr);

//let arr = ["awe", "wawa", "ff", "sas"],
 //   i = arr.join(', ');
//    console.log(i);
//



/*let arr = [1, 15, 4],
    i = arr.sort(compareNum);


function compareNum(a, b) {
    return a-b;
}
    console.log(arr);   */




/*let soldier = {
    healt: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
*/

//1)
//console.log(typeof(String(4)));

//2)
console.log("ww" + false);
console.log('https://vk.com/catalog/' + 5);


//3)

console.log(typeof(Number('5')));

console.log(typeof(parseInt("15px", 10)));

let answer = +prompt('Hello', '');

let switcher = null;
if (switcher) {
    console.log('Working')
}
switcher = 1;
if (switcher) {
    console.log('Working')
}


  console.log([] + 1 + 2);

let y = 1; 
let x = y = 2; 
alert(x);


alert(2 && 1 && null && 0 && undefined); 





























