"use strict"
const arr=(['sister','brother','parents','grands']);
let iterator=arr[Symbol.iterator]();//利用接口
for (let item of arr){
	console.log(item);
}
for (let item of set.keys()) {
  console.log(item);
}//打印
function f1(){
	add(x);
		console.log(arr);
	}

function f2(){
	delete(y);
		console.log(arr);
	}
}
function f3(){
	has(z);
	console.log(arr);
}
function f4(){
	clear(r);
	console.log(arr);
}//增删清楚查找的应用
const person = Object.freeze();//冻结
person.name = "lilan";
person.age = 20;
console.log(person.name);
console.log(person.age);//冻结女票的属性

function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
  }, 100);
}

var update={
	x='I love China!';
	func:function(){

      let str = '(sentence) => `something ${sentence}!`';
      let func = eval.call(null, str);
      func('something') 
	}
},
test:function(){
	setTimeout(()=>{
		this.func();
	},1000);
}
