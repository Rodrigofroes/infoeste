import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();
const controller = new UsuarioController();

router.get('/', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'código para listar todos os usuários'
    controller.listar(req, res);
});

router.post('/', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para adicionar um novo usuário'
    controller.gravar(req, res);
});

router.put('/', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para atualizar um usuário'
    controller.atualizar(req, res);
});

router.delete('/:id', (req, res) => {
    // #swagger.tags = ['Usuário']
    // #swagger.summary = 'Endpoint para deletar um usuário'
    controller.deletar(req, res);
});

export default router;