class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    getBranch() {
        console.log(this.branch);
    }

    getDetails() {
        console.log(this.name + " - " + this.branch);
    }
}

const s = new Student("Priyanshu", "CSE");

s.getName();
s.getBranch();
s.getDetails();
