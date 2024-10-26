import UsuarioEntity from "../entities/usuario.entity.js";
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

    async gravar(req, res) {
        try {
            let { nome, email, idade } = req.body;
            if (nome && email && idade) {
                let usuarioEntity = new UsuarioEntity("", nome, email, idade);
                let usuarioRepository = new UsuarioRepository();
                let gravar = usuarioRepository.inserir(usuarioEntity);
                if (gravar) {
                    res.status(201).json({ message: 'Registro inserido com sucesso' });
                } else {
                    res.status(404).json({ message: 'Nenhum registro inserido' });
                }
            } else {
                res.status(400).json({ message: 'Dados inválidos' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            let { id, nome, email, idade } = req.body;
            if (id && nome && email && idade) {
                let usuarioEntity = new UsuarioEntity(id, nome, email, idade);
                let usuarioRepository = new UsuarioRepository();

                let usuarioExiste = await usuarioRepository.obterPorId(usuarioEntity);
                if (!usuarioExiste) {
                    res.status(404).json({ message: 'Usuário não encontrado' });
                    return;
                }

                let atualizar = usuarioRepository.atualizar(usuarioEntity);
                if (atualizar) {
                    res.status(200).json({ message: 'Registro atualizado com sucesso' });
                } else {
                    res.status(404).json({ message: 'Nenhum registro atualizado' });
                }
            } else {
                res.status(400).json({ message: 'Dados inválidos' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async obter(req, res) {
        try {
            let { id } = req.params;
            if (id) {
                let usuarioEntity = new UsuarioEntity(id, "", "", "");
                let usuarioRepository = new UsuarioRepository();
                let usuario = await usuarioRepository.obterPorId(usuarioEntity);
                if (usuario) {
                    res.status(200).json(usuario);
                } else {
                    res.status(404).json({ message: 'Nenhum registro encontrado' });
                }
            } else {
                res.status(400).json({ message: 'Dados inválidos' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deletar(req, res) {
        try {
            let { id } = req.params;
            if (id) {
                let usuarioRepository = new UsuarioRepository();

                let usuarioExiste = await usuarioRepository.obterPorId(id);
                if (!usuarioExiste) {
                    res.status(404).json({ message: 'Usuário não encontrado' });
                    return;
                }

                let deletar = usuarioRepository.deletar(id);
                if (deletar) {
                    res.status(200).json({ message: 'Registro deletado com sucesso' });
                } else {
                    res.status(404).json({ message: 'Nenhum registro deletado' });
                }
            } else {
                res.status(400).json({ message: 'Dados inválidos' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}