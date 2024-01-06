"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation = {
    validAlimentos: (req, res, next) => {
        const { alimento, qnt_min, qnt_max } = req.body;
        if (alimento.trim() === '') {
            res.status(401).json({ error: true, mensagem: "Deve-se enviar o alimento." });
        }
        if (!qnt_min || !qnt_max) {
            res.status(401).json({ error: true, mensagem: "Deve-se enviar a quantidade mínima e máxima de proteina." });
        }
        return next();
    }
};
exports.default = validation;
