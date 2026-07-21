import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { AddCartPage } from "../pages/AddCartPage";
import { ContinueShoppingPage } from "../pages/ContinueShoppingPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("Continue shopping from cart", async ({ page }) => {


    logger.info("===== Continue Shopping Test Started =====");


    // Login

    const loginPage = new LoginPage(page);


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Login successful");


    // Add First Product

    const addCartPage = new AddCartPage(page);


    await addCartPage.addProductToCart();


    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");


    logger.info("First product added to cart");


    // Open Cart

    await addCartPage.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart page opened");


    // Continue Shopping

    const continueShoppingPage =
        new ContinueShoppingPage(page);


    await continueShoppingPage.continueShopping();


    await expect(page)
        .toHaveURL(/inventory/);


    logger.info("Returned to inventory page");


    // Add Second Product

    await continueShoppingPage.addSecondProduct();


    logger.info("Second product added");


    // Verify Cart Count

    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("2");


    logger.info("Cart count verified as 2");


    // Open Cart Again

    await addCartPage.viewCart();


    await expect(page)
        .toHaveURL(/cart\.html/);


    logger.info("Cart opened after continue shopping");


    // Verify Second Product Displayed

    await continueShoppingPage.verifySecondProductInCart();


    logger.info("Second product verified in cart");


    logger.info("===== Continue Shopping Test Completed =====");


});