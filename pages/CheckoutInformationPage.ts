import { Page, Locator } from "@playwright/test";


export class CheckoutInformationPage {


    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;


    constructor(private page: Page) {


        this.firstName =
            page.locator("#first-name");


        this.lastName =
            page.locator("#last-name");


        this.postalCode =
            page.locator("#postal-code");


        this.continueButton =
            page.locator("#continue");


    }



    async enterCheckoutInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {


        await this.firstName.fill(firstName);


        await this.lastName.fill(lastName);


        await this.postalCode.fill(postalCode);


        await this.continueButton.click();


        await this.page.waitForURL(
            /checkout-step-two\.html/
        );


    }


}