Repo made to help practice best practices and new features of ES6.

## What is being used for writing ES6 code
* I am using ATOM with `linter-jshint` to help show possible conflicts in the code.
* I am using node modules of babel e.g. `npm install --save-dev babel-cli babel-preset-env`
* I am using node to run `app.js`

## Some Sample Code

```
// Read only variable
(function(){
	const MAX_SIZE = 10;

	console.log(MAX_SIZE);
	// Block level scope of i
	for(let i = 0;i<10;i++){
	 console.log(i)
	}
})();

// Arrow Functions

let add = (x,y) => {
		let temp = x+y;
		return temp;
	}
	let square = x => Math.pow(x,2);
	let three = () => 3;

// Classes

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
  
// Template Literals
// Great for making urls
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

```
