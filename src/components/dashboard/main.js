function signOut(ev) {
    firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
            window.location.replace('/index.html');
        }, function (error) {
            // An error happened.
            console.log(error);
        });

    ev.preventDefault();
}

document.querySelector('#btnLogOut').addEventListener('click', signOut);