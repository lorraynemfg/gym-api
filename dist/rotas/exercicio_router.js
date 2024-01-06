"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exercicios_controller_1 = __importDefault(require("../controladores/exercicios_controller"));
const exercicio = (0, express_1.Router)();
exercicio.get("/gym/exercicio/:name", exercicios_controller_1.default);
exports.default = exercicio;
