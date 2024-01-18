"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JavaDom {
    constructor(page) {
        this.page = page;
    }
    async insertJavaScript(callback) {
        this.evalueteDom(callback);
    }
    async evalueteDom(callback) {
        try {
            const sc = await this.page.evaluate(callback);
            return true;
        }
        catch (err) {
            console.log(`evalueteDom() error: ${err}`);
            return false;
        }
    }
}
exports.default = JavaDom;
