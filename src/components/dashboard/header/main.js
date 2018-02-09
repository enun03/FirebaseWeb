(function() {
var Header = {
  el: document.querySelector('.header'),
  _user: undefined,
  data: function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          Header._user = user;
        }
      });
  },
  render: function() {
    this.data();
    console.log(Header._user);
    this.el.innerHTML = `
      <h1>Welcome ${Header._user.displayName}!</h1>
    `;
  }
}

Header.render();
})()
