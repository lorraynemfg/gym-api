"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alimentos_controller_1 = __importDefault(require("../controladores/alimentos_controller"));
const alimentos_middleware_1 = __importDefault(require("../middleaware/alimentos_middleware"));
const alimento = (0, express_1.Router)();
alimento.post("/gym/alimentos", alimentos_middleware_1.default.validAlimentos, alimentos_controller_1.default.buscarAlimento); //  GET apenas para TESTE - mudar para POST
exports.default = alimento;
