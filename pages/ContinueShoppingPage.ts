import { Page, Locator, expect } from "@playwright/test";

export class ContinueShoppingPage {

    readonly continueShoppingButton: Locator;
    readonly secondProductButton: Locator;
    readonly secondProductInCart: Locator;

    constructor(private page: Page) {

        this.continueShoppingButton =
            page.locator("#continue-shopping");

        this.secondProductButton =
            page.locator("#add-to-cart-sauce-labs-bike-light");

        this.secondProductInCart =
            page.locator(".inventory_item_name")
                .filter({ hasText: "Sauce Labs Bike Light" });

    }

    async continueShopping() {

        await this.continueShoppingButton.click();

        await this.page.waitForURL(/inventory/);

        await this.secondProductButton.waitFor({
            state: "visible"
        });

    }

    async addSecondProduct() 
    {

        await this.secondProductButton.click();

    }

    async verifySecondProductInCart() {

        await expect(this.secondProductInCart)
            .toBeVisible();

    }

}