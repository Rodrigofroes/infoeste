import BaseRepository from "./baseRepository";
import ProdutoEntity from "../entities/produtoEntity";

export default class produtoRepository extends BaseRepository {

    constructor(db) {
        super(db);
    }

    async listar() {
        let sql = "select * from tb_produto";
        let rows = await this.db.ExecutaComandoNonQuery(sql);
        return this.toMap(rows);
    }

    deletar() {
        let sql = "delete from tb_produto where proId = ?";
    }
}