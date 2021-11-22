class Student{
	constructor(firstName, lastName){
		this.firstName=firstName;
		this.lastName=lastName;
	}
	greet(){
		console.log(`Hello! My name is ${this.firstName} and I'm a student!`);
	}
}

let student = new Student();
student.greet();