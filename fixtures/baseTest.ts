import { test as base, expect } from "@playwright/test";
import { ConfigReader } from "../utils/configreader";
import * as allure from "allure-js-commons";
import { Screenshot } from "../utils/Screenshot";
import { logger } from "../utils/logger";


export const test = base.extend({

    page: async ({ page }, use, testInfo) => {


        logger.info("========== Test Started ==========");

        logger.info("Test Name : " + testInfo.title);



        await page.goto(
            ConfigReader.getUrl(),
            {
                waitUntil: "domcontentloaded"
            }
        );


        logger.info("Application URL opened");



        page.setDefaultTimeout(
            ConfigReader.getExplicitWait()
        );



        try {


            await use(page);


            logger.info(
                "Test Passed : " + testInfo.title
            );


        } 
        catch(error) {


            logger.error(
                "Test Failed : " + testInfo.title
            );


            throw error;


        }
        finally {


            if(testInfo.status !== testInfo.expectedStatus) {

          const screenshot =
           await Screenshot.capture(page, testInfo.title);



                await allure.attachment(
                    "Failure Screenshot",
                    screenshot,
                    {
                        contentType:"image/png"
                    }
                );


                logger.info(
                    "Failure screenshot attached"
                );


            }


            logger.info(
                "========== Test Completed =========="
            );

        }

    }

});


export { expect };