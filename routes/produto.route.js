import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();

let ctrl = new ProdutoController();

router.get("/", (req, res) => {
    // #swagger.tags = ['Produto']
    // #swagger.summary = 'Endpoint para retornar todos os produtos'
    ctrl.listar(req, res);
});

router.post("/", (req, res) => [
    //#swagger.tags = ['Produto']
    //#swagger.summary = 'Cadastra um produto'
    ctrl.gravar(req, res)
]);

router.delete("/:id", (req, res) => {
    //#swagger.tags = ['Produto']
    //#swagger.summary = 'Deletar um produto'
    ctrl.deletar(req, res);
});

router.get("/:id", (req, res) => {
    //#swagger.tags = ['Produto']
    //#swagger.summary = 'Retorna um produto baseado em um código'
    ctrl.obter(req, res);
});

router.put("/", (req, res) => {
    //#swagger.tags = ['Produto']
    //#swagger.summary = 'Altera um produto'
    ctrl.alterar(req, res);
});

router.patch("/", (req, res) => {
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    //#swagger.tags = ['Produto'']
    //#swagger.summary = 'Realiza a alteração parcial do produto'
    
    ctrl.alterarParcialmente(req, res);
});

export default router;