// CheckoutPage.js
class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('button.btn-success');
    this.countryInput = page.locator('#country');
    this.suggestionDropdown = page.locator('.suggestions ul li a');
    this.checkbox = page.locator('.checkbox.checkbox-primary');
    this.purchaseButton = page.locator('input[type="submit"]');
    this.successMsg = page.locator('.alert-success');
  }

  async fillCountry(country) {
    await this.checkoutButton.click();
    await this.countryInput.type(country.substring(0, 3), { delay: 200 });
    await this.suggestionDropdown.first().waitFor({ state: 'visible' });
    await this.page.waitForTimeout(5000);
    await this.suggestionDropdown.first().click();
    await this.checkbox.click();
  }

  async completePurchase() {
    await this.purchaseButton.click();
  }

  async getSuccessMessage() {
    return this.successMsg.textContent();
  }
}

module.exports = { CheckoutPage };
