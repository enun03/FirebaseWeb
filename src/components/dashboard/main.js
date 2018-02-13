window.onload = function() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
        // User is signed in.
        window.location.replace('/');
    }
    else {
        console.log(user);
    }
    });
}

function signOut(ev) {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
            window.location.replace('/');
        }, function (error) {
            // An error happened.
            console.log(error);
        });

    ev.preventDefault();
}

document.querySelector('#btnLogOut').addEventListener('click', signOut);