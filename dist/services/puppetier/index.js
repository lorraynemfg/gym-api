"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const PgClick_1 = __importDefault(require("./PgClick"));
const PgWrite_1 = __importDefault(require("./PgWrite"));
const PgScript_1 = __importDefault(require("./PgScript"));
const configLaunch = () => {
    return {
        headless: false,
        waitForInitialPage: true // esperar a pagina iniciar
    };
};
class Navegador {
    constructor(browser, page) {
        this.browser = browser;
        this.page = page;
        this.click = new PgClick_1.default(page);
        this.write = new PgWrite_1.default(page);
        this.script = new PgScript_1.default(page);
    }
    static async execute() {
        const browser = await puppeteer_1.default.launch(configLaunch());
        const page = await browser.newPage();
        const puppet = new Navegador(browser, page);
        return puppet;
    }
    async goTo(site) {
        const regexSite = /^https?:\/\/.+/gi;
        const checkedSite = regexSite.test(site);
        if (checkedSite) {
            await this.page.goto(site);
            return;
        }
        await this.closeBrowser();
    }
    async closeBrowser() {
        await this.browser.close();
    }
    async closePage() {
        await this.page.close();
    }
    async clickElement(select) {
        await this.click.selectClick(select);
    }
    async writeElement(select, text) {
        await this.write.selectWrite(select, text);
    }
    async scriptDom(callback) {
        await this.script.insertJavaScript(callback);
    }
}
exports.default = Navegador;
