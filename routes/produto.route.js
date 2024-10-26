import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();

let ctrl = new ProdutoController();

router.get("/", (req, res) => {

    // #swagger.tags = ['Produto'']
    // #swagger.summary = 'Endpoint para retornar todos os produtos'
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    ctrl.listar(req, res);
});

router.post("/", (req, res) => [
    //#swagger.tags = ['Produto'']
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    //#swagger.summary = 'Cadastra um produto'
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/usuarioModel"
                    }  
                }
            }
        } 
    */
    ctrl.gravar(req, res)
]);

router.delete("/:id", (req, res) => {
    //#swagger.tags = ['Produto'']
    //#swagger.summary = 'Deletar um produto'
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    ctrl.deletar(req, res);
});

router.get("/:id", (req, res) => {
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    //#swagger.tags = ['Produto'']
    //#swagger.summary = 'Retorna um produto baseado em um código'
    ctrl.obter(req, res);
});

router.put("/", (req, res) => {
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    //#swagger.tags = ['Produto'']
    //#swagger.summary = 'Altera um produto'
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/usuarioModel"
                    }  
                }
            }
        } 
    */
    ctrl.alterar(req, res);
});

router.patch("/", (req, res) => {
    /* #swagger.security = [{
            "bearerAuth": []
    }] */
    //#swagger.tags = ['Produto'']
    //#swagger.summary = 'Realiza a alteração parcial do produto'
    /*  #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/usuarioModel"
                }  
            }
        }
    } 
*/
    ctrl.alterarParcialmente(req, res);
});

export default router;