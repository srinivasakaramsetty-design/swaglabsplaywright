import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { CheckoutPage } from "../pages/checkoutpage";
import { CheckoutInformationPage } from "../pages/CheckoutInformationPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { BackButtonPage } from "../pages/BackButtonPage";
import { LogoutPage } from "../pages/LogoutPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Verify Back Home and Logout functionality", async ({ page }) => {


    logger.info("===== Back Home and Logout Test Started =====");


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


    await addCartPage.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart opened");



    // Checkout

    const checkoutPage = new CheckoutPage(page);


    await checkoutPage.clickCheckout();



    const checkoutInfo =
        new CheckoutInformationPage(page);


    await checkoutInfo.enterCheckoutInformation(
        "Srinivas",
        "Akaramsetty",
        "500001"
    );


    logger.info("Checkout information completed");



    // Finish Order

    const overviewPage =
        new CheckoutOverviewPage(page);


    await overviewPage.clickFinish();


    await expect(page)
        .toHaveURL(/checkout-complete\.html/);


    logger.info("Order completed successfully");



    // Back Home

    const backHomePage =
        new BackButtonPage(page);


    await backHomePage.clickBackHome();


    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Back Home button verified");



    // Logout

    const lp =
        new LogoutPage(page);


    await lp.logout();


    logger.info("Logout clicked");



    // Verify Login Page




});