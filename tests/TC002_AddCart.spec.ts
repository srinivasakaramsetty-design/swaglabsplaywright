import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Add product to cart", async ({ page }) => {


    logger.info("===== Add Cart Test Started =====");


    logger.info("Current URL before login: " + page.url());


    // Login
    const loginPage = new LoginPage(page);


    logger.info("Created LoginPage object");


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    logger.info("Current URL after login: " + page.url());


    // Verify login success

    await expect(page).toHaveURL(/inventory/);


    logger.info("Login successful - Inventory page displayed");



    // Add product to cart

    const addCartPage = new AddCartPage(page);


    logger.info("Adding Sauce Labs Backpack to cart");


    await addCartPage.addProductToCart();


    logger.info("Product added successfully");



    // Verify cart badge count

    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");


    logger.info("Cart count verified as 1");



    // Open cart page

    await addCartPage.viewCart();


    logger.info("Opened cart page");



    // Verify cart URL

    await expect(page).toHaveURL(/cart\.html/);


    logger.info("Cart page validation completed");


    logger.info("===== Add Cart Test Completed =====");


});