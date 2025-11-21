class School {
  constructor(profesion, identifier, alias) {
    this.profesion = profesion;
    this.identifier = identifier;
    this.alias = alias;
  }
  describe() {
    return `${this.profesion} ${this.identifier} ${this.alias}`;
  }
}

class Student extends School {
  constructor(identifier, alias) {
    super("Student", identifier, alias);
  }
}

class Teacher extends School {
  constructor(identifier, alias) {
    super("Teacher", identifier, alias);
  }
}

const arnold = new Student(600, "arnie");
const regina = new Teacher(500, "regi");
const classroom = [arnold, regina];

for (const cr of classroom) {
  console.log(cr.describe());
}