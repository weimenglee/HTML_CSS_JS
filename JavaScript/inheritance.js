class Student extends Person {
    constructor(name, age, studentId) {
        // Call the parent class constructor
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    describe() {
        // Call the parent class describe method and extend it
        return `${super.describe()} Student ID: ${this.studentId}.`;
    }
}

// Create an instance of Student
const student = new Student('Alice', 22, 'S12345');

// Use methods from Person class
console.log(student.getName()); // Output: Alice
console.log(student.getAge());  // Output: 22

// Use method from Student class
console.log(student.getStudentId()); // Output: S12345

// Use overridden method
console.log(student.describe()); // Output: Alice is 22 years 
                                 // old. Student ID: S12345.