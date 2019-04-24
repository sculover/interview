function Person() {

}

Person.prototype.name = "test";
var p = new Person();
Person.prototype.name = "test1";
Person.prototype = {
	name: "test2"
};
console.log(p.name);