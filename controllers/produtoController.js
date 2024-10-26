import ProdutoRepository from "../repositories/produtoRepository.js";
import ProdutoEntity from "../entities/produtoEntity.js";

export default class produtoController {

    async listar(req, res) {
        try {
            let produto = ProdutoRepository();
            let lista = await produto.listar();
            res.status(200).json(lista);
        } catch (ex) {
            res.status(500).json({ msg: ex.message });
        }
    }

    async obter(req, res) {
        try {
            let { id } = req.params;
            let produto = new ProdutoRepository();
            let entidade = await produto.obter(id);
            if (entidade) {
                res.status(200).json(entidade);
            } else {
                res.status(401).json({ msg: "Produto não encontrado!" })
            }
        } catch (ex) {
            res.status(500).json({ msg: ex.message });
        }
    }

    async gravar(req, res) {

        try {
            let { nome, descricao, estoque } = req.body;
            if (nome && descricao && estoque) {

                let entidade = new ProdutoEntity(0, nome, descricao, estoque);

                let repo = new ProdutoRepository();
                let result = await repo.gravar(entidade);

                if (result)
                    res.status(201).json({ msg: "Produto gravado com sucesso!" });
                else
                    throw new Error("Erro ao inserir o produto no banco de dados");
            }
            else {
                res.status(400).json({ msg: "Parâmetros não informados corretamente!" });
            }
        }
        catch (ex) {
            res.status(500).json({ msg: ex.message });
        }
    }

    async deletar(req, res) {
        try {
            let { id } = req.params;
            let repo = new ProdutoRepository();
            if (await repo.obter(id)) {
                let result = await repo.deletar(id);

                if (result)
                    res.status(200).json({ msg: "Produto deletado!" });
                else
                    throw new Error("Erro ao executar o comando de deleção");
            }
            else {
                res.status(404).json({ msg: "Produto não encontrado para a deleção!" })
            }
        }
        catch (ex) {
            res.status(500).json({ msg: ex.message });
        }
    }

    async alterar(req, res) {
        try {
            let { id, nome, descricao, estoque } = req.body;
            if (id && nome && descricao && estoque) {

                let entidade = new ProdutoEntity(id, nome, descricao, estoque);
                let repo = new ProdutoRepository();
                if (await repo.obter(id)) {
                    let result = await repo.alterar(entidade);

                    if (result) {
                        res.status(200).json({ msg: "Alteração realizada com sucesso!" });
                    }
                    else
                        throw new Error("Erro ao executar o comando update!");
                }
                else {
                    res.status(404).json({ msg: "Produto não encontrado para alteração" });
                }
            }
            else {
                res.status(400).json({ msg: "Informe os parâmetros corretamente!" });
            }
        }
        catch (ex) {
            res.status(500).json({ msg: ex.message });
        }
    }

    async alterarParcialmente(req, res) {
        try {
            let {id, nome, descricao, estoque} = req.body;
            if(id && (nome || descricao || estoque )) {

                let produtoEntidade = new ProdutoEntity(id, nome, descricao, estoque);
                let produtoRepo = new ProdutoRepository();
                
                let result = await produtoRepo.alteracaoParcial(produtoEntidade);

                if (result == false)
                    throw new Error("Erro ao executar a atualização no banco de dados")
                
                res.status(200).json({msg: "Alteração parcial realizada com sucesso!"});
            }
        }
        catch(ex) {
            res.status(500).json({msg: ex.message});
        }
    }
}