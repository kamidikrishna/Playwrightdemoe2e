const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ShoppingPage } = require('../pages/ShoppingPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const testData = require('../data/testData.json');


test.describe('E2E Ecommerce Flow', () => {
  test('Login, add products to cart, and checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const shoppingPage = new ShoppingPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await expect(page).toHaveURL(/shop/);

    // Add products to cart
    for (const product of testData.products) {
      await shoppingPage.addProductToCart(product);
    }
    await shoppingPage.goToCheckout();

    // Checkout
    await checkoutPage.fillCountry('India');
    await checkoutPage.completePurchase();
    const successMsg = await checkoutPage.getSuccessMessage();
    expect(successMsg).toContain('Success');
  });
});
