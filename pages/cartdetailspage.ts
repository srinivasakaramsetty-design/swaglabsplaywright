import { Page, Locator } from "@playwright/test";

export class cartdetailspage 
{

    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;


    constructor(private page: Page) {

        // Product name
        this.productName = page.locator("#item_4_title_link");

        // Product description
        this.productDescription = page.locator(".inventory_item_desc");

        // Product price
        this.productPrice = page.locator(".inventory_item_price");

    }


    async getProductName() {

        return await this.productName.textContent();

    }


    async getProductDescription() {

        return await this.productDescription.textContent();

    }


    async getProductPrice() {

        return await this.productPrice.textContent();

    }

}