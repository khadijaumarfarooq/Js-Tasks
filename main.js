import  studentInfo  from "./students.js";
import  teacherInfo from "./teacher.js";
const student = studentInfo();
const teacher = teacherInfo();
console.log("Student Information:");
console.log(`Name: ${student.name}`);
console.log(`Age : ${student.age}`);
console.log(`Grade:${student.grade}`);


console.log("Teacher Information");
console.log(`Name:${teacher.name}`);
console.log(`Subject:${teacher.subject}`);
console.log(`Experience:${teacher.experience}`);

