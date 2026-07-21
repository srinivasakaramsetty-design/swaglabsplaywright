import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Add multiple products to cart", async ({ page }) => {


    logger.info("========== Starting Multiple Products Test ==========");



    // Login

    const loginPage = new LoginPage(page);


    logger.info("Created LoginPage object");


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Login successful - Inventory page displayed");



    // Products Page

    const pp = new ProductsPage(page);


    logger.info("Adding multiple products to cart");


    await pp.addMultipleProducts();


    logger.info("Two products added successfully");



    // Verify Cart Count

    const cartCount = await pp.getCartCount();


    logger.info("Cart count : " + cartCount);


    expect(cartCount)
        .toBe("2");


    logger.info("Cart count verified successfully");



    // Open Cart

    await pp.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart page opened successfully");



    logger.info("========== Multiple Products Test Completed ==========");


});