var Header = {
  el: document.querySelector('.header'),
  render: function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        Header.el.innerHTML = `
          <h3>
            Welcome ${user.displayName}! 
            <a id="btnLogOut" class="btn-floating btn-large waves-effect waves-light red right"><i class="fas fa-sign-out-alt"></i></a>
          </h3>
        `;

        document.querySelector('#btnLogOut').addEventListener('click', signOut);
      }
    });
  }
}

Header.render();