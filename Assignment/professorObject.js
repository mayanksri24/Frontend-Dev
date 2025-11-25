function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    console.log(this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.getDepartment = function () {
    console.log(this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.getSubject = function () {
    console.log(this.subject);
};

const p = new Professor("Dr. Sharma", "Computer Science", "AI");

p.getName();
p.getDepartment();
p.getSubject();
