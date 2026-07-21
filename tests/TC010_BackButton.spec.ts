import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { CheckoutPage } from "../pages/checkoutpage";
import { CheckoutInformationPage } from "../pages/CheckoutInformationPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { BackButtonPage } from "../pages/BackButtonPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Verify Back Home button after order completion", async ({ page }) => {


    logger.info("===== Back Home Test Started =====");


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


    logger.info("Product added to cart");


    // Open Cart

    await addCartPage.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart page opened");


    // Checkout

    const checkoutPage = new CheckoutPage(page);


    await checkoutPage.clickCheckout();


    await expect(page)
        .toHaveURL(/checkout-step-one\.html/);


    logger.info("Checkout page opened");


    // Checkout Information

    const checkoutInformationPage =
        new CheckoutInformationPage(page);


    await checkoutInformationPage.enterCheckoutInformation(
        "Srinivas",
        "Akaramsetty",
        "500001"
    );


    await expect(page)
        .toHaveURL(/checkout-step-two\.html/);


    logger.info("Checkout information completed");


    // Finish Order

    const checkoutOverviewPage =
        new CheckoutOverviewPage(page);


    await checkoutOverviewPage.clickFinish();


    await expect(page)
        .toHaveURL(/checkout-complete\.html/);


    logger.info("Order completed successfully");


    // Back Home

    const backHomePage =
        new BackButtonPage(page);


    await backHomePage.clickBackHome();


    // Verify Inventory Page

    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Back Home button navigated to products page");


    logger.info("===== Back Home Test Completed =====");


});