//-----------------------------------> ASSIGNMENT OF OBJECT, ARRAY AND FUNCTION <----------------------------------------------------------------------------------

//-----------------------------------> ASSIGNMENT NO-1 <--------------------------------------------------------------------------------------------------------

//-----------------------------------> BUILDING FRIEND LIST <---------------------------------------------------------------------------------------------------

type Friend = {
    firstName: string,
    lastName: string,
    id?: string
};
let people = {
    firstName: 'Muntaha',
    lastName: 'Arsalan',
    id: 'arsalanmuntaha1@gmail.com',
    friends: [ ]
};

let friend1: Friend = {
    firstName: 'Sana',
    lastName: 'Shakoor',
    id: 'sanashakoor456@gmail.com'
};

let friend2: Friend = {
    firstName: 'Arisha',
    lastName: 'Naz',
    id: 'arishnaz_36@gmail.com'
};

let friend3: Friend = {
    firstName: 'Aisha',
    lastName: 'Hussain',
}; 
people.friends.push(friend1,friend2,friend3)

console.log(people) //output: {
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