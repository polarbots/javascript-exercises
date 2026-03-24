const getAge = function(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear
}

const findTheOldest = function(arr) {

    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        // If age of current person is larger than existing older age, return the current person, if not, then return the existing oldest person
        // The value return is then assigned to "oldest", and is ready for the next "loop" of the array until we find the oldest person
        return oldestAge < currentAge ? currentPerson : oldest

    })
};

// Do not edit below this line
module.exports = findTheOldest;
