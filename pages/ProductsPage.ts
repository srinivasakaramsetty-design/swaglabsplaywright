import { Page, Locator } from "@playwright/test";


export class ProductsPage {


    readonly backpack: Locator;
    readonly bikeLight: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;



    constructor(private page: Page) {


        this.backpack =
            page.locator("#add-to-cart-sauce-labs-backpack");


        this.bikeLight =
            page.locator("#add-to-cart-sauce-labs-bike-light");


        this.cartBadge =
            page.locator(".shopping_cart_badge");


        this.cartLink =
            page.locator(".shopping_cart_link");


    }



    async addMultipleProducts() {


        await this.backpack.click();

        await this.bikeLight.click();


    }



    async getCartCount() {


        return await this.cartBadge.textContent();


    }



    async viewCart() {


        await this.cartLink.click();


    }


}