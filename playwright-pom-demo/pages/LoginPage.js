// LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.locator('#signInBtn');
    this.errorMsg = page.locator('.alert-danger');
  }

  async goto() {
    await this.page.goto('/loginpagePractise/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async getErrorMessage() {
    return this.errorMsg.textContent();
  }
}

module.exports = { LoginPage };
