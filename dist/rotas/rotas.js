"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alimentos_router_1 = __importDefault(require("./alimentos_router"));
const exercicio_router_1 = __importDefault(require("./exercicio_router"));
const calculo_router_1 = __importDefault(require("./calculo_router"));
const alimentos_nutri_1 = __importDefault(require("./alimentos_nutri"));
const db_excel_file_1 = __importDefault(require("./db_excel_file"));
const routes = (0, express_1.Router)();
routes.use(alimentos_router_1.default);
routes.use(exercicio_router_1.default);
routes.use(calculo_router_1.default);
routes.use(alimentos_nutri_1.default);
routes.use(db_excel_file_1.default);
exports.default = routes;
