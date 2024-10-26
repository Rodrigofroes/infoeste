import UsuarioRepository from "../repositories/usuario.repository.js";

export default class UsuarioController {
    async listar(req, res) {
        try {
            let usuarioRepository = new UsuarioRepository();
            let usuarios = await usuarioRepository.obterTodos();
            if (usuarios.length > 0) {
                res.status(200).json(usuarios);
            } else {
                res.status(404).json({ message: 'Nenhum registro encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}