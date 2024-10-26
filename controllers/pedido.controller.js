import PedidoEntity from "../entities/pedido.entity.js";
import ProdutoEntity from "../entities/produtoEntity.js";
import UsuarioEntity from "../entities/usuario.entity.js";
import PedidoRepository from "../repositories/pedido.repository.js";
import ProdutoRepository from "../repositories/produtoRepository.js";
import UsuarioRepository from "../repositories/usuario.repository.js";

export default class PedidoController {
    async listar(req, res) {
        try {
            let pedidoRepository = new PedidoRepository();
            let pedidos = await pedidoRepository.obterTodos();
            if (pedidos.length > 0) {
                res.status(200).json(pedidos);
            } else {
                res.status(404).json({ message: 'Nenhum registro encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async gravar(req, res) {
        try {
            let { usuario, produto, quantidade } = req.body;
            if (usuario && produto && quantidade) {
                let pedidoEntity = new PedidoEntity("", usuario, produto, quantidade);
                let pedidoRepository = new PedidoRepository();

                let usuarioEntity = new UsuarioEntity(usuario, "", "", "");
                let usuarioRepository = new UsuarioRepository();

                // let produtoEntity = new ProdutoEntity(produto, "", "", "");
                let produtoRepository = new ProdutoRepository();

                let usuarioExiste = await usuarioRepository.obterPorId(usuarioEntity);
                let produtoExiste = await produtoRepository.obter(produto);

                if (usuarioExiste.length == 0 || produtoExiste.length == 0) {
                    res.status(404).json({ message: 'Usuário ou Produto não encontrado' });
                    return;
                }

                let gravar = await pedidoRepository.inserir(pedidoEntity);
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
            let { id, usuario, produto, quantidade } = req.body;
            if (id && usuario && produto && quantidade) {
                let pedidoEntity = new PedidoEntity(id, usuario, produto, quantidade);
                let pedidoRepository = new PedidoRepository();

                let usuarioEntity = new UsuarioEntity(usuario, "", "", "");
                let usuarioRepository = new UsuarioRepository();

                let produtoRepository = new ProdutoRepository();

                let usuarioExiste = await usuarioRepository.obterPorId(usuarioEntity);
                let produtoExiste = await produtoRepository.obter(produto);

                if (usuarioExiste.length == 0 || produtoExiste.length == 0) {
                    res.status(404).json({ message: 'Usuário ou Produto não encontrado' });
                    return;
                }


                let atualizar = await pedidoRepository.atualizar(pedidoEntity);
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

    async deletar(req, res) {
        try {
            let { id } = req.params;
            if (id) {
                let pedidoEntity = new PedidoEntity(id, "", "", "");
                let pedidoRepository = new PedidoRepository();

                let pedidoExiste = await pedidoRepository.obterPorId(pedidoEntity);

                if (!pedidoExiste) {
                    res.status(404).json({ message: 'Pedido não encontrado' });
                    return;
                }

                let deletar = await pedidoRepository.deletar(pedidoEntity);
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