//-------------------------------------> ASSIGNMENT NO-4 <--------------------------------------------------------------------------------

//-------------------------------------> STUDENT LIST ORGANIZER <-------------------------------------------------------------------------

interface Student {
    name: string;
    seniorStatus: boolean;
    completeAssignment: boolean;
}
const students: Student[] = [
    {
        name: "Muntaha",
        seniorStatus:true,
        completeAssignment:true,
    },
    {
        name:"Arsalan",
        seniorStatus:true,
        completeAssignment:true,
    },
    {
        name:"Sana",
        seniorStatus:false,
        completeAssignment:true,
    },
    {
        name:"Aisha",
        seniorStatus:false,
        completeAssignment:false,
    },
    {
        name:"Fatima",
        seniorStatus:true,
        completeAssignment:true
    }
]
console.log(students) //Output: [
                      //        { name: 'Muntaha', seniorStatus: true, completeAssignment: true },
                      //        { name: 'Arsalan', seniorStatus: true, completeAssignment: true },
                      //        { name: 'Sana', seniorStatus: false, completeAssignment: true },  
                      //        { name: 'Aisha', seniorStatus: false, completeAssignment: false },
                      //        { name: 'Fatima', seniorStatus: true, completeAssignment: true }  
                      //        ]

//Find Senior Students with Assignments
function findSeniorWithCompAssign (students:Student[]){
    return students.filter(students=>students.seniorStatus&&students.completeAssignment===true)
}
console.log(findSeniorWithCompAssign(students)) // Output: [
                                                //         { name: 'Muntaha', seniorStatus: true, completeAssignment: true },
                                                //         { name: 'Arsalan', seniorStatus: true, completeAssignment: true },
                                                //         { name: 'Fatima', seniorStatus: true, completeAssignment: true }
                                                //         ]
                                            
// Class List Update:         
function studentsNotCompAssign(students:Student[]){
    return students.filter(students=>students.completeAssignment)
}
console.log(studentsNotCompAssign(students))//Output:[
                                            //       { name: 'Muntaha', seniorStatus: true, completeAssignment: true },
                                            //       { name: 'Arsalan', seniorStatus: true, completeAssignment: true },
                                            //       { name: 'Sana', seniorStatus: false, completeAssignment: true },
                                            //       { name: 'Fatima', seniorStatus: true, completeAssignment: true }
                                            //       ]
  