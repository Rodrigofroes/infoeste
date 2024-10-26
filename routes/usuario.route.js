import express from 'express';
import UsuarioController from '../controllers/usuario.controller.js';

const router = express.Router();
const controller = new UsuarioController();

router.get('/', controller.listar);

export default router;