"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PgUltils_1 = __importDefault(require("./PgUltils"));
class PgWrite extends PgUltils_1.default {
    constructor(page) {
        super(page);
        this.page = page;
    }
    async selectWrite(seletor, text) {
        const typeSelect = this.typeSelect(seletor);
        if (typeSelect === 'NULL') {
            console.log(`write Error: Select invalido ! ${seletor}`);
        }
        switch (typeSelect) {
            case "ID":
                await this.writeID(seletor, text);
                break;
            case "CLASS":
                await this.writeCLASS(seletor, text);
                break;
            case "PATH":
                await this.writePATH(seletor, text);
                break;
            default:
                console.log(`click Error: Select invalido ! ${seletor}`);
        }
    }
    async writeID(select, text) {
        try {
            await this.page.waitForSelector(select, { visible: true });
            await this.page.type(select, text);
            return true;
        }
        catch (err) {
            console.log(`writeID error: ${err}`);
            return false;
        }
    }
    async writeCLASS(select, text) {
        try {
            await this.page.waitForSelector(select, { visible: true });
            await this.page.type(select, text);
            return true;
        }
        catch (err) {
            console.log(`writeCLASS error: ${err}`);
            return false;
        }
    }
    async writePATH(select, text) {
        try {
            await this.page.waitForXPath(select, { visible: true });
            await this.page.type(select, text);
            return true;
        }
        catch (err) {
            console.log(`writePATH error: ${err}`);
            return false;
        }
    }
}
exports.default = PgWrite;
