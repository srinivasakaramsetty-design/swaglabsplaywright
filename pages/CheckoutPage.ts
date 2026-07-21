import { Page, Locator } from "@playwright/test";


export class CheckoutPage {


    readonly checkoutButton: Locator;


    constructor(private page: Page) {


        // Checkout button in Cart page
        this.checkoutButton =
            page.locator("#checkout");


    }



    async clickCheckout() {


        await this.checkoutButton.click();


        await this.page.waitForURL(/checkout-step-one\.html/);


    }


}