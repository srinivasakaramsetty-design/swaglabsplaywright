import { Page, Locator } from "@playwright/test";


export class RemoveProductPage {


    readonly removeButton: Locator;
  


    constructor(private page: Page) {


        this.removeButton =
            page.locator("button[id^='remove']").first();
      

    }



    async removeProduct() {

        await this.removeButton.click();

    }




}