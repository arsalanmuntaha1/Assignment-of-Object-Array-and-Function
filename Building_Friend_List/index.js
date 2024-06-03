//-----------------------------------> ASSIGNMENT OF OBJECT, ARRAY AND FUNCTION <----------------------------------------------------------------------------------
let people = {
    firstName: 'Muntaha',
    lastName: 'Arsalan',
    id: 'arsalanmuntaha1@gmail.com',
    friends: []
};
let friend1 = {
    firstName: 'Sana',
    lastName: 'Shakoor',
    id: 'sanashakoor456@gmail.com'
};
let friend2 = {
    firstName: 'Arisha',
    lastName: 'Naz',
    id: 'arishnaz_36@gmail.com'
};
let friend3 = {
    firstName: 'Aisha',
    lastName: 'Hussain',
};
people.friends.push(friend1, friend2, friend3);
console.log(people); //output: {
//     firstName: 'Muntaha',
//     lastName: 'Arsalan',
//     id: 'arsalanmuntaha1@gmail.com',
//     friends: [
//       {
//         firstName: 'Sana',
//         lastName: 'Shakoor',
//         id: 'sanashakoor456@gmail.com'
//       },
//       {
//         firstName: 'Arisha',
//         lastName: 'Naz',
//         id: 'arishnaz_36@gmail.com'
//       },
//       { firstName: 'Aisha', lastName: 'Hussain' }
//     ]
//   } 
