import { Page, Locator } from "@playwright/test";


export class LogoutPage {


    readonly menuButton: Locator;
    readonly logoutButton: Locator;


    constructor(private page: Page) {


        // Open side menu

        this.menuButton =
            page.locator("#react-burger-menu-btn");


        // Logout link

        this.logoutButton =
            page.locator("#logout_sidebar_link");


    }



    async logout() {


        await this.menuButton.click();


        await this.logoutButton.click();


        await this.page.waitForURL(/saucedemo\.com/);


    }


}