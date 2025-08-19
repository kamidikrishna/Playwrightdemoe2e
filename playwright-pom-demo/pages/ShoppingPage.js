// ShoppingPage.js
class ShoppingPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.productCards = page.locator('.card.h-100');
    this.addToCartButtons = page.locator('button.btn-info');
    this.checkoutButton = page.locator('a.nav-link.btn.btn-primary');
  }

  async addProductToCart(productName) {
    const count = await this.productCards.count();
    for (let i = 0; i < count; i++) {
      const cardTitle = await this.productCards.nth(i).locator('h4 a').textContent();
      if (cardTitle.trim() === productName) {
        await this.addToCartButtons.nth(i).click();
        break;
      }
    }
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { ShoppingPage };
