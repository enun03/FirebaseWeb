window.onload = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      window.location.replace('/dashboard.html');
    }
  });
}