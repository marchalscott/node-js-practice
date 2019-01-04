let name = 'Marchal';
let age = 29;
let hasHobbies = true;

const summerizeUser = (userName, userAge, hasHobby) => {
    return (
        'Name is ' +
        userName +
        ' age is ' +
        userAge +
        ' and the user has hobbies ' +
        hasHobbies
    );
};

console.log(summerizeUser(name, age, hasHobbies));