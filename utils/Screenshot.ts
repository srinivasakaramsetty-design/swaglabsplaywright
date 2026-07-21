import { Page } from "@playwright/test";


export class Screenshot {


    static async capture(
        page: Page,
        name: string = "failure"
    ) {


        return await page.screenshot({

            path: `screenshots/${name}.png`,

            fullPage: true

        });


    }


}