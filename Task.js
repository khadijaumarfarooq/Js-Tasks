const students = [
    {Name:"Khadija", age:17,Class:"12th",Marks:85},
     {Name:"Minsa", age:14,Class:"10th",Marks:45},
      {Name:"Aliya", age:15,Class:"12th",Marks:87},
     {Name:"Hafsa", age:17,Class:"11th",Marks:60},
      {Name:"Urwa", age:15,Class:"9th",Marks:50},
];

// map method uuse karen gy status check karny ke lye and new array banany ke lye
const results = students.map((student, index)=> {
    const status = student.Marks >= 50? "Pass": "Fail";
    return{
        Name :student.Name,
        age :student.age,
        Class: student.Class,
        Marks:student.Marks,
        Status: status 
    };
});
// Displaying the results in console
console.log("Students Results:,Results:");
console.log(results);
// we also can display results separetly like below
results.forEach((student)=> {
    console.log(`Student: ${student.Name}`);
    console.log(`age : ${student.age}`);
    console.log(`Class: ${student.Class}`);
    console.log(`Marks: ${student.Marks}`);
    console.log(`Status: ${student.status}`);
});
