import { test, expect } from "../fixtures/baseTest";
import { AddCartPage } from "../pages/AddCartPage";
import { LoginPage } from "../pages/LoginPage";
import { RemoveProductPage } from "../pages/RemoveProdcutPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Remove product from cart", async ({ page }) => {


    logger.info("========== Starting Remove Product Test ==========");



    // Login

    const loginPage = new LoginPage(page);


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    await expect(page)
        .toHaveURL(/inventory/);



    logger.info("Login successful - Inventory page displayed");



    // Add product to cart

    const addCartPage = new AddCartPage(page);


    await addCartPage.addProductToCart();


    logger.info("Product added to cart");



    // Verify cart badge count

    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");


    logger.info("Cart count verified as 1");



    // Open Cart

    await addCartPage.viewCart();



    await expect(page)
        .toHaveURL(/cart\.html/);



    logger.info("Cart page opened");



    // Verify product exists before remove

    let beforeRemove =
        await page.locator(".cart_item").count();


    expect(beforeRemove)
        .toBe(1);



    logger.info(
        "Before remove cart items: " + beforeRemove
    );



    // Remove Product

    const removePage = new RemoveProductPage(page);


    await removePage.removeProduct();


    logger.info("Product removed successfully");



    // Verify cart empty after remo

    logger.info("========== Remove Product Test Completed ==========");


});