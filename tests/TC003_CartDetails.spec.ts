import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { cartdetailspage } from "../pages/cartdetailspage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Verify cart product details", async ({ page }) => {


    logger.info("===== Cart Details Test Started =====");


    logger.info("URL before login: " + page.url());


    // Login

    const loginPage = new LoginPage(page);


    logger.info("Created LoginPage object");


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    logger.info("URL after login: " + page.url());


    await expect(page).toHaveURL(/inventory/);


    logger.info("Login successful - Inventory page displayed");



    // Add product to cart

    const addCartPage = new AddCartPage(page);


    logger.info("Adding product to cart");


    await addCartPage.addProductToCart();


    logger.info("Product added to cart");



    // Verify cart count

    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");


    logger.info("Cart badge count verified");



    // Open cart

    await addCartPage.viewCart();


    logger.info("Opened cart page");


    await expect(page).toHaveURL(/cart\.html/);


    logger.info("Cart URL verified");



    // Cart details validation

    const cart = new cartdetailspage(page);



    const productName = await cart.getProductName();

    const productPrice = await cart.getProductPrice();

    const productDescription = await cart.getProductDescription();



    console.log("Product Name:", productName);

    console.log("Product Price:", productPrice);

    console.log("Product Description:", productDescription);



    await expect(cart.productName)
        .toHaveText("Sauce Labs Backpack");



    await expect(cart.productPrice)
        .toHaveText("$29.99");



    await expect(cart.productDescription)
        .toContainText("carry.allTheThings");



    logger.info("Product details validated successfully");


    logger.info("===== Cart Details Test Completed =====");


});