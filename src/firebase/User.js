(function() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user);
  } else {
    // No user is signed in.
    console.log('User not found..');
  }
});
})()