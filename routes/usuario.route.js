import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();
const controller = new UsuarioController();

router.get('/', controller.listar);
router.post('/', controller.gravar);
router.put('/', controller.atualizar);
router.delete('/:id', controller.deletar);

export default router;