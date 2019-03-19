const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersGreaterThanThree = users.filter(function(u) {
    return u.languages.length >= 3;
});

const userEmailAddresses = users.map(u => u.email);

const totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

const averageTotalYearsOfExperience = totalYearsOfExperience / users.length;

const longestEmailOfUsers = users.reduce((largestEmail, user) => {
    if(largestEmail.length < user.email.length){
        largestEmail = user.email;
    }
    return largestEmail;
}, "");

const allInstructors = users.reduce((previous, user) => {
    return previous + " " + user.name;
}, "");


console.log(usersGreaterThanThree);
console.log(userEmailAddresses);
console.log(averageTotalYearsOfExperience);
console.log(longestEmailOfUsers);
console.log(allInstructors);
