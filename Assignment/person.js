function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    console.log(this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBranch = function () {
    console.log(this.branch);
};

Student.prototype.getDetails = function () {
    console.log(this.name + " - " + this.branch);
};

const s1 = new Student("Priyanshu", "CSE");

s1.getName();
s1.getBranch();
s1.getDetails();
