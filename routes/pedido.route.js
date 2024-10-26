import express from 'express';
import PedidoController from '../controllers/pedido.controller.js';

const router = express.Router();
const controller = new PedidoController();

router.get('/', (req, res) => {

    // #swagger.tags = ['Pedido']
    // #swagger.summary = 'Endpoint para retornar todos os pedidos'

    controller.listar(req, res);
});

router.post('/', (req, res) => {

    //#swagger.tags = ['Pedido']
    //#swagger.summary = 'Endpoint para cadastra um pedido'

    controller.gravar(req, res);
});

router.put('/', (req, res) => {

    //#swagger.tags = ['Pedido']
    //#swagger.summary = 'Endpoint para atualizar um pedido'

    controller.atualizar(req, res);
});

router.delete('/:id', (req, res) => {

    //#swagger.tags = ['Pedido']
    //#swagger.summary = 'Endpoint para deletar um pedido'

    controller.deletar(req, res);
});

export default router;