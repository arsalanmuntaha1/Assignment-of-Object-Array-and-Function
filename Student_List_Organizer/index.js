"use strict";
const students = [
    {
        name: "Muntaha",
        seniorStatus: true,
        completeAssignment: true,
    },
    {
        name: "Arsalan",
        seniorStatus: true,
        completeAssignment: true,
    },
    {
        name: "Sana",
        seniorStatus: false,
        completeAssignment: true,
    },
    {
        name: "Aisha",
        seniorStatus: false,
        completeAssignment: false,
    },
    {
        name: "Fatima",
        seniorStatus: true,
        completeAssignment: true
    }
];
console.log(students); //Output: [
//        { name: 'Muntaha', seniorStatus: true, completeAssignment: true },
//        { name: 'Arsalan', seniorStatus: true, completeAssignment: true },
//        { name: 'Sana', seniorStatus: false, completeAssignment: true },  
//        { name: 'Aisha', seniorStatus: false, completeAssignment: false },
//        { name: 'Fatima', seniorStatus: true, completeAssignment: true }  
//        ]
//Find Senior Students with Assignments
function findSeniorWithCompAssign(students) {
    return students.filter(students => students.seniorStatus && students.completeAssignment === true);
}
console.log(findSeniorWithCompAssign(students)); // Output: [
//         { name: 'Muntaha', seniorStatus: true, completeAssignment: true },
//         { name: 'Arsalan', seniorStatus: true, completeAssignment: true },
//         { name: 'Fatima', seniorStatus: true, completeAssignment: true }
//         ]
// Class List Update:         
function studentsNotCompAssign(students) {
    return students.filter(students => students.completeAssignment);
}
console.log(studentsNotCompAssign(students)); //Output:[ { name: 'Sana', seniorStatus: false, completeAssignment: true } ]
