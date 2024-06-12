//-----------------------------------> ASSIGNMENT OF OBJECT, ARRAY AND FUNCTION <----------------------------------------------------------------------------------
var people = {
    firstName: 'Muntaha',
    lastName: 'Arsalan',
    id: 'arsalanmuntaha1@gmail.com',
    friends: []
};
var friend1 = {
    firstName: 'Sana',
    lastName: 'Shakoor',
    id: 'sanashakoor456@gmail.com'
};
var friend2 = {
    firstName: 'Arisha',
    lastName: 'Naz',
    id: 'arishnaz_36@gmail.com'
};
var friend3 = {
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
