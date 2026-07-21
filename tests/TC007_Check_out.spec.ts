import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { CheckoutPage } from "../pages/checkoutpage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Verify Checkout Button", async ({ page }) => {


    logger.info("===== Checkout Test Started =====");


    // Login

    const loginPage = new LoginPage(page);


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Login successful");


    // Add Product

    const addCartPage = new AddCartPage(page);


    await addCartPage.addProductToCart();


    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");


    logger.info("Product added successfully");


    // Open Cart

    await addCartPage.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart page opened");


    // Checkout

    const checkoutPage =
        new CheckoutPage(page);


    await checkoutPage.clickCheckout();


    await expect(page)
        .toHaveURL(/checkout-step-one\.html/);


    logger.info("Checkout Information page displayed");


    logger.info("===== Checkout Test Completed =====");


});