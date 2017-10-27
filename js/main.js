function Person(id, name, age){
	this.id = id;
	this.name = name;
	this.age = age;
}

Person.prototype = {
	constructor: Person
};

