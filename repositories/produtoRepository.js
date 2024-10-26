import BaseRepository from "./baseRepository.js";
import ProdutoEntity from "../entities/produtoEntity.js";

export default class ProdutoRepository extends BaseRepository {

    constructor(db) {
        super(db);
    }

    async listar() {
        let sql = "select * from tb_produto";
        let rows = await this.db.ExecutaComando(sql);
        return this.toMap(rows);
    }

    async obter(id) {
        let sql = "select * from tb_produto where pro_id";
        let valores = [id];
        let row = await this.db.executaComando(sql, valores);
        return this.toMap(row[0]);
    }


    async deletar(id) {
        let sql = "delete from tb_produto where pro_id = ?";
        let valores = [id];
        let result = await this.db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }


    async gravar(entidade) {
        let sql = "insert into tb_produto (pro_nome, pro_descricao, pro_estoque) values (?, ?, ?)";
        let valores = [entidade.proNome, entidade.proDescricao, entidade.proEstoque];
        let result = await this.db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }



    async alterar(entidade) {
        let sql = "update tb_produto set pro_nome = ?, pro_descricao = ?, pro_estoque = ? where pro_id = ?";
        let valores = [entidade.proNome, entidade.proDescricao, entidade.proEstoque, entidade.proId];
        let result = await this.db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    async alterarParcialmente(entidade) {
        let sql = `update tb_produto set pro_nome = colapse(?, pro_nome),
                                         pro_descricao = colapse(?, pro_descricao),
                                         pro_estoque = colapse(?, pro_estoque) 
                                         where pro_id = ?`;
        let valores = [entidade.proNome, entidade.proDescricao, entidade.proEstoque, entidade.proId];
        let result = await this.db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }

    toMap(rows) {
        if (rows && typeof rows.length == "number") {
            let lista = [];
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let produto = new ProdutoEntity();
                produto.id = row["pro_id"];
                produto.nome = row["pro_nome"];
                produto.descricao = row["pro_descricao"];
                produto.estoque = row["pro_estoque"];

                lista.push(produto);
            }
            return lista;
        }
        else if (rows) {
            let produto = new ProdutoEntity();
            produto.id = rows["pro_id"];
            produto.nome = rows["pro_nome"];
            produto.descricao = rows["pro_descricao"];
            produto.estoque = rows["pro_estoque"];
            return produto;
        }
        else {
            return null;
        }
    }
}