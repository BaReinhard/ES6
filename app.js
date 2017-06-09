(function () {
   'use strict';
   // this function is strict...

// Read only variable
(function(){
	const MAX_SIZE = 10;

	console.log(MAX_SIZE);
	// Block level scope of i
	for(let i = 0;i<10;i++){
	 console.log(i)
	}
})();



// destructuring
(function(){
	console.log("Destructuring");
	let x = 3;
	let y = 5;
	console.log("x:",x,"y:",y);
	// Swaps values
	[x,y] = [y,x];
	console.log("x:",x,"y:",y);


})();

// Rest Params
(function(){
	console.log("Rest Params");
	let doWork = function(name, ...numbers){
		let result = 0;
		numbers.forEach(function(n){
			result +=n;
		});
		return result;
	};
	let result = doWork("Brett",1,2,3,4,5);
	console.log(result);
})();


(function(){
	console.log("Spread Operator");
	// Spread Operator
	let spreadWork = function(x,y,z){
		return x +y + z;
	};

	let spreadResult = spreadWork(...[1,2,3]);
	console.log(spreadResult);

	let spreadA = [4,5,6];
	let spreadB = [1,2,3,...spreadA,7,8,9];
	console.log(spreadB);



})();


// Template Literals
(function(){
	let tempLitWork = function(name){
		return `Hello, ${name}`;
	};
	let tempLitResult = tempLitWork("Brett");
	console.log(tempLitResult);

	// Build Urls
	let category = "music";
	let id = 2112;
	let url = `http://apiserver/${category}/${id}`;
	console.log(url);

	// Uses tags as well
	let upper = function(strings, ...values){
		let result = "";
		for(let i = 0;i<strings.length;i++){
			result += strings[i];
			if(i<values.length){
				result+=values[i];
			}
		}
		return result.toUpperCase();
	};

	let xx = 1;
	let yy = 3;
	let resultant = upper `${xx} + ${yy} is ${xx+yy}`;
	console.log(resultant);

})();


/// CLASSES !!!!
(function(){
	console.log("Classes");
	class Person{
		constructor(name){
			this.name = name;
		}
		get name(){
			return this._name;
		}
		doWork(){
			return "free";
		}
		toString(){
			return this.name;
		}
		set name(newValue){
			if(newValue!== undefined){
				this._name = newValue;
			}

		}
	}
	class Employee extends Person{
			constructor(name,title){
				super(name);
				this.title = title;
			}

			doWork(){
				return `${this.name} is working`;
			}
			get title(){
				return this._title;
			}
			set title(title){
				this._title = title;
			}

	}
	let p1 = new Person("Brett");
	let p2 = new Person("Kamila");
	let e1 = new Employee("Brett","Developer");
	let e2 = new Employee("Kamila","Baby");
	console.log(p1.name);
	console.log(p2.name);
	console.log(p2.doWork());
	console.log(e1.doWork());
	console.log(e2.doWork());
	console.log(e1.title);
	console.log(e2.title);
	e1.name = "Brett Reinhard";
	console.log(e1.name);
	console.log(e1.toString());
	console.log(p1.toString());

	let makeEveryoneWork = function(...people){
		var results = [];
		for (var i = 0; i<people.length;i++){
			if(people[i] instanceof Person){

				results.push(people[i].doWork());
			}
		}
		return results;
	};

	console.log(makeEveryoneWork(p1,e1,{}));
})();

// Arrow Functions!
(function(){
	console.log("Arrow functions i.e. let add = (x,y) => x+y;");
	let add = (x,y) => {
		let temp = x+y;
		return temp;
	}
	let square = x => Math.pow(x,2);
	let three = () => 3;
	console.log("square(add(2,3);");
	console.log(square(add(2,three())));
	console.log("add(2,3)");
	console.log(add(2,3));


var numbers = [1,2,3,4,5];
var sum = 0;
numbers.forEach(n=>sum+=n);
console.log(sum);

var doubled = numbers.map(n=>n*2);
console.log(doubled);
})();


}());
