"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PgUltils_page;
Object.defineProperty(exports, "__esModule", { value: true });
var SelectType;
(function (SelectType) {
    SelectType["ID"] = "ID";
    SelectType["CLASS"] = "CLASS";
    SelectType["PATH"] = "PATH";
    SelectType["NULL"] = "NULL";
})(SelectType || (SelectType = {}));
class PgUltils {
    constructor(page) {
        _PgUltils_page.set(this, void 0);
        __classPrivateFieldSet(this, _PgUltils_page, page, "f");
    }
    typeSelect(select) {
        __classPrivateFieldGet(this, _PgUltils_page, "f").once('load', () => {
            console.log('Pagina carregada');
        });
        if ((/^#.+/.test(select))) {
            return SelectType.ID;
        }
        else if ((/^\/\/.+/.test(select))) {
            return SelectType.PATH;
        }
        else if ((/^\..+/.test(select))) {
            SelectType.CLASS;
        }
        return SelectType.NULL;
    }
    async waitFunction() {
        // função para esperar algum elemento ser exibido no DOM, quando presente retorna TRUE
        try {
            const username = '#title > h1 > yt-formatted-string';
            const ok = await __classPrivateFieldGet(this, _PgUltils_page, "f").waitForFunction((username) => {
                return document.querySelector(username);
            }, { polling: 'mutation', timeout: 30000 }, username);
            console.log('encontrado essa porcaria');
            return true;
        }
        catch (err) {
            console.log(`evalueteDom() error: ${err}`);
            return false;
        }
    }
}
_PgUltils_page = new WeakMap();
exports.default = PgUltils;
