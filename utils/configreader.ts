import { config } from "../config/testConfig";

export class ConfigReader {

    static getUrl() {
        return config.url;
    }

    static getUsername() {
        return config.username;
    }

    static getPassword() {
        return config.password;
    }

    static getExplicitWait(){

        return config.explicitWait;

    }

}