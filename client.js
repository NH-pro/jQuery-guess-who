console.log('Here are all the available people:', people);

$(document).ready(onReady);
// jQuery ready

function onReady() {
    console.log('In jQuery!')
    // TEST jQuery connection.

    $('#face_container').ready(displayPeople);
    // When 'face_container' loads, execute 'displayPeople' function.
}


function displayPeople() {
    console.log('In displayPeople function');
    // TEST function connection.

    for (face of people) {
        $('#face_container').append(`
        <img src="https://github.com/${face.githubUsername}.png?size=250" alt="Profile image of ${face.name}">
        `);
    };
    // Loop each person in 'people' array, append 'face_container' with each person's github profile img.
}