var Header = {
  el: document.querySelector('.header'),
  render: function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        Header.el.innerHTML = `
          <h1>Welcome ${user.displayName}!</h1>
        `;
      }
    });
  }
}

Header.render();