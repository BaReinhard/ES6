## Reason for this Repo
As more and more features are becoming available in ES6+ it appears that a solid foundation in ES6 and beyond is becoming more and more worthwhile. Given that most of these features fix some of the shortcomings of the previous standards and are a few of the reasons why some of the current libraries and frameworks were created. I feel that in the coming weeks/months/years that learning these new features will help to write more meaningful code with better practices in mind.

## Getting Started Writing ES6

* Install NodeJS
* Create new projects directory
* `npm init -y`
* `npm install --save-dev babel-cli babel-preset-env`
* Install jshint package for whatever editor you so choose
* Create `app.js` file or whatever name you prefer
* Create the first block of code :

```
(function(){
'use strict';
let name = "Your_name_here";
let hello = `Hello World! -${name}`;
console.log(hello);
// expect output : Hello World! -Your_name_here
})();
```
### Start Writing More!

## What is being used for writing ES6 code
* <b>ATOM</b> with `linter-jshint` to help show possible conflicts in the code.
* <b>NodeJS</b> packages of babel e.g. `npm install --save-dev babel-cli babel-preset-env`
* <b>NodeJS</b> to run `app.js`

## Some Sample Code

### Read Only Variables and Block Level Scope
```
(function(){
	const MAX_SIZE = 10;

	console.log(MAX_SIZE);
	// Block level scope of i
	for(let i = 0;i<10;i++){
	 console.log(i)
	}
})();
```

### Arrow Functions

```
let add = (x,y) => {
		let temp = x+y;
		return temp;
	}
	let square = x => Math.pow(x,2);
	let three = () => 3;

```

### Classes

```
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
```

### Template Literals, great for making urls

```
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
