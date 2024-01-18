"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PgUltils_1 = __importDefault(require("./PgUltils"));
class PgClick extends PgUltils_1.default {
    constructor(page) {
        super(page);
        this.page = page;
        //this.#page = page        
    }
    async selectClick(seletor) {
        const typeSelect = this.typeSelect(seletor);
        if (typeSelect === 'NULL') {
            console.log(`click Error: Select invalido ! ${seletor}`);
        }
        switch (typeSelect) {
            case "ID":
                await this.clickID(seletor);
                break;
            case "CLASS":
                await this.clickCLASS(seletor);
                break;
            case "PATH":
                await this.clickPATH(seletor);
                break;
            default:
                console.log(`click Error: Select invalido ! ${seletor}`);
        }
    }
    async clickID(select) {
        try {
            await this.page.waitForSelector(select, { visible: true });
            await this.page.click(select);
            return true;
        }
        catch (err) {
            console.log(`clickID error: ${err}`);
            return false;
        }
    }
    async clickCLASS(select) {
        try {
            await this.page.waitForSelector(select, { visible: true });
            await this.page.click(select);
            return true;
        }
        catch (err) {
            console.log(`clickCLASS error: ${err}`);
            return false;
        }
    }
    async clickPATH(select) {
        try {
            await this.page.waitForXPath(select, { visible: true });
            await this.page.click(select);
            return true;
        }
        catch (err) {
            console.log(`clickPATH error: ${err}`);
            return false;
        }
    }
}
exports.default = PgClick;
