import { Page, Locator } from "@playwright/test";


export class CheckoutOverviewPage {


    readonly finishButton: Locator;
    readonly productName: Locator;
    readonly paymentInformation: Locator;
    readonly shippingInformation: Locator;
    readonly totalPrice: Locator;



    constructor(private page: Page) {


        this.finishButton =
            page.locator("#finish");


        this.productName =
            page.locator(".inventory_item_name");


        this.paymentInformation =
            page.locator("[data-test='payment-info-value']");


        this.shippingInformation =
            page.locator("[data-test='shipping-info-value']");


        this.totalPrice =
            page.locator(".summary_total_label");


    }



    async clickFinish() {


        await this.finishButton.click();


        await this.page.waitForURL(
            /checkout-complete\.html/
        );


    }


}