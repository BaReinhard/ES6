(function () {
   'use strict';
   // this function is strict...

// Read only variable
	 const MAX_SIZE = 10;

	 console.log(MAX_SIZE);
	 // Block level scope of i
	 for(let i = 0;i<10;i++){
	 	console.log(i)
	 }


// destructuring
let x = 3;
let y = 5;
console.log("x:",x,"y:",y);
// Swaps values
[x,y] = [y,x];
console.log("x:",x,"y:",y);



}());
