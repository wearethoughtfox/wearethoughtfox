---
layout: blog
title: JavaScript functions example
date: 2018-06-06T19:03:02+00:00
categories:
  - Blog
tags:
  - javascript
---
While working on a project, I asked [Paul](http://www.pauldwaite.co.uk/) why [Airbnb’s coding standards recommend using named function expressions instead of function declarations](https://github.com/airbnb/javascript#functions)?

He made this example, which I am posting with permission, along with his note:

> I’ve never actually had a problem caused by function name hoisting (i.e. being able to call a function before it’s defined) before, but maybe it’s an issue in larger codebases.
>
>

```
console.log("=============================================================");
console.log("1. Running a function before it’s defined, using its own name\n");

foo_bad1();

console.log("\n");
console.log("That works. Airbnb think that’s bad. I’m sure there are reasons, but I don’t know what they are.");


console.log("\n");
console.log("\n");
console.log("=============================================================");
console.log("2. Running a function before it’s defined, using a variable that will later be assigned that function\n");

try {
	foo_bad2();
}
catch (e) {
	console.log(e);

	console.log("\n");
	console.log("We got an error! Good!");
}


// bad
function foo_bad1() {
  console.log(" -- foo_bad1 ran! -- ");
}

// bad
var foo_bad2 = function () {
  console.log(" -- foo_bad2 ran! --");
  thisFunctionDoesNotExist();
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
var foo_good = function longUniqueMoreDescriptiveLexicalFoo() {
  console.log(" -- foo_good ran! --");
  thisFunctionDoesNotExist();
};


console.log("\n\n====================================================");
console.log("3. Running a function after it’s defined, and it throws an error, but the function is anonymous\n");

try {
	foo_bad2();
}
catch (e) {
	console.log(e);

	console.log("\n");
	console.log("We got an error! Good!");
	console.log("But we only get the short name in the call stack. And that’s bad, for some reason?");
}



console.log("\n\n====================================================");
console.log("4. Running a function after it’s defined, and it throws an error, and the function has its own name\n");

try {
	foo_good();
}
catch (e) {
	console.log(e);

	console.log("\n");
	console.log("We got an error! Good!");
	console.log("And it’s got the long name in the call stack. So that’s good too.");
}


console.log("\n");
console.log("\n");
```
