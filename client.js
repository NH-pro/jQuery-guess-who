console.log('Here are all the available people:', people);


$(document).ready(onReady);
// jQuery ready

let clickPerson = '';


function onReady() {
    console.log('In jQuery!')
    // TEST jQuery connection.

    $('#face_container').ready(displayPeople);
    // When 'face_container' loads, execute 'displayPeople' function.

    $('#face_container').ready(promptRandomPerson);
    // When 'face_container' loads, execute 'promptRandomPerson' function.

    $('#face_container').on('click', 'img', isThisThatPerson);
    // When an 'img' is clicked, execute 'isThisThatPerson' function.
}


function displayPeople() {
    console.log('In displayPeople function!');
    // TEST function connection.

    for (face of people) {
        $('#face_container').append(`
        <img src="https://github.com/${face.githubUsername}.png?size=250" alt="Profile image of ${face.name}" data-name="${face.name}">
        `);
    };
    // Loop each person in 'people' array, append 'face_container' with each person's github profile img.
}


function promptRandomPerson() {
    console.log('In promptRandomPerson function!');
    // TEST function connection

    let minPeeps = 0;
    // min amount of people, is 0 cause first in arrays is 0

    let maxPeeps = people.length - 1;
    // max amount of people

    let chosenPerson = randomNumber(minPeeps, maxPeeps);
    // Picking a random num 0-7 by calling 'randomNumber' function and assigning it to a var.

    clickPerson = people[chosenPerson].name;

    $('#name_chosen_display').append(`<h2>Click on: ${clickPerson}`);
    // Target 'name_chosen_display', append it with random number index name of 'people' array.
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function isThisThatPerson() {
    console.log('In isThisThatPerson function!', this);
    // TEST function connection.
    
    if ($(this).data('name') === clickPerson ) { 
    // Conditonal of 'img'.data name is equal to the 'clickPerson' global var.
        $('#name_chosen_display').empty();
        // Empty 'name_chosen_display' from DOM.
        $(promptRandomPerson);
        // Execute a new 'promptRandomPerson' function to get a new person.
        return alert('You clicked the correct person!');
        // Return an alert that the user is correct!
    }
    else {
        return alert('Oops! Wrong person. Try again!')
        // Return an alert that the user was incorrect.
    }
}