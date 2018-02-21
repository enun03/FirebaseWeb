var Nav = {
  el: document.querySelector('.nav'),
  render: () => {
    Nav.el.innerHTML = `<h2 class='nav-title'><i class="fas fa-code"></i> Firebase Web Example</h2>`;
    document.head.innerHTML += `<link href="/src/components/layout/nav/style.css" rel="stylesheet"> `;
  }
}

Nav.render();