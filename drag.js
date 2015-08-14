function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var idsY = 0;
	obj.onmousedown = function(){

		
	}
}
function Person(name, age){
	this.name = name;
	this.age  = age;
}
Person.prototype.sayName = function(){
	alert(this.name);
}
Person.prototype.sayAge = function(){
	alert(this.name);
}
Person.prototype.sayHell = function(){
	alert(this.age);
}