import { Page, Locator } from "@playwright/test";


export class BackButtonPage {


    readonly backHomeButton: Locator;


    constructor(private page: Page) {


        // Back Home button on Order Confirmation page

        this.backHomeButton =
            page.locator("#back-to-products");


    }



    async clickBackHome() {


        await this.backHomeButton.click();


        await this.page.waitForURL(/inventory/);


    }


}