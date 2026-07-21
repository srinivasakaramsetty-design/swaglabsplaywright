import { test, expect } from "../fixtures/baseTest";
import { LoginPage } from "../pages/LoginPage";
import { ConfigReader } from "../utils/configreader";
import { logger } from "../utils/logger";


test("SwagLabs Login Test", async ({ page }) => {


    logger.info("Starting SwagLabs Login Test");

    const loginPage = new LoginPage(page);


    logger.info("Created LoginPage object");


    await loginPage.login(
        ConfigReader.getUsername(),
        ConfigReader.getPassword()
    );


    logger.info("Login completed successfully");


    await expect(page).toHaveURL(/inventory/);


    logger.info("Verified inventory page URL");


});