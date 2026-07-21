import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { CheckoutPage } from "../pages/checkoutpage";
import { CheckoutInformationPage } from "../pages/CheckoutInformationPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Checkout Overview and Place Order", async ({ page }) => {


    logger.info("===== Checkout Overview Test Started =====");


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


    logger.info("Checkout information entered successfully");


    // Checkout Overview

    const checkoutOverviewPage =
        new CheckoutOverviewPage(page);


    // Verify Product

    await expect(checkoutOverviewPage.productName)
        .toContainText("Sauce Labs Backpack");


    logger.info("Product verified");


    // Verify Payment Information

    await expect(checkoutOverviewPage.paymentInformation)
        .toBeVisible();


    logger.info("Payment information verified");


    // Verify Shipping Information

    await expect(checkoutOverviewPage.shippingInformation)
        .toBeVisible();


    logger.info("Shipping information verified");


    // Verify Total Price

    await expect(checkoutOverviewPage.totalPrice)
        .toBeVisible();


    logger.info("Total price verified");


    // Finish Order

    await checkoutOverviewPage.clickFinish();


    await expect(page)
        .toHaveURL(/checkout-complete\.html/);


    logger.info("Finish button clicked");


    // Verify Order Confirmation

        await expect(page.locator(".complete-header"))
    .toHaveText("Thank you for your order!");


    logger.info("Order placed successfully");


    logger.info("===== Checkout Overview Test Completed =====");


});