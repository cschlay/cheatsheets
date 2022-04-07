class Menu extends HTMLElement {
  constructor() {
    super();
    this.className = "menu";
    this.innerHTML = `
      <a href="index.html">General</a>
      <a href="aspnet-core.html">ASP.NET Core</a>
      <a href="react.html">React</a>
      <a href="jest.html">Jest</a>
      <a href="playwright.html">Playwright</a>
      <a href="cypress.html">Cypress</a>
      <a href="devops.html">DevOps</a>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
          Licensed under
          <a href="https://github.com/cschlay/cheatsheets/blob/main/LICENSE">The Unlicense</a>
      </footer>
    `;
  }
}

window.customElements.define("x-footer", Footer);
window.customElements.define("x-menu", Menu);
