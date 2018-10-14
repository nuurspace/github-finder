//Instantial the github class object
const github = new Github;

// Instantiate ui class
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Close alert link
const alertClose = document.querySelector('body');

// Serach input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
});

// Close alert event listener
alertClose.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-alert')){
        ui.clearAlert();
    }

    e.preventDefault();
})