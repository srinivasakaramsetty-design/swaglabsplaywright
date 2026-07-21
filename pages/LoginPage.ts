import { Page, Locator } from "@playwright/test";
import { logger } from "../utils/logger";

export class LoginPage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;


    constructor(private page: Page) {

        this.username = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");

    }


    async login(username: string, password: string) {


        logger.info("Current URL: " + this.page.url());


        logger.info("Waiting for username field");

        await this.username.waitFor({
            state: "visible",
            timeout: 10000
        });


        logger.info("Entering username");

        await this.username.fill(username);



        logger.info("Waiting for password field");

        await this.password.waitFor({
            state: "visible",
            timeout: 10000
        });



        logger.info("Entering password");

        await this.password.fill(password);



        logger.info("Clicking login button");

        await this.loginButton.click();



        logger.info("Waiting for inventory page");


        await this.page.waitForURL(/inventory.html/, {
            timeout: 5000
        });



        logger.info("Login completed successfully");

    }


    async isLoginPageDisplayed(): Promise<boolean> {

        return await this.username.isVisible();

    }

}