import PedidoEntity from "../entities/pedido.entity.js";
import BaseRepository from "./baseRepository.js";

export default class PedidoRepository extends BaseRepository {
    constructor(db) {
        super(db);
    }

    async obterTodos() {
        let sql = "SELECT * FROM tb_pedido INNER JOIN tb_usuario ON tb_pedido.usu_id = tb_usuario.usu_id INNER JOIN tb_produto ON tb_pedido.pro_id = tb_produto.pro_id";
        let consulta = await this.db.ExecutaComando(sql);

        return this.toMAP(consulta);
    }

    async obterPorId(pedido) {
        let sql = "SELECT * FROM tb_pedido WHERE ped_id = ?";
        let consulta = await this.db.ExecutaComando(sql, [pedido.id]);

        return this.toMAP(consulta[0]);
    }

    async inserir(pedido) {
        let sql = "INSERT INTO tb_pedido (usu_id, pro_id, quantidade) VALUES (?, ?, ?)";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [pedido.usuario, pedido.produto, pedido.quantidade]);

        return consulta;
    }

    async atualizar(pedido) {
        let sql = "UPDATE tb_pedido SET usu_id = ?, pro_id = ?, quantidade = ? WHERE ped_id = ?";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [pedido.usuario, pedido.produto, pedido.quantidade, pedido.id]);

        return consulta;
    }

    async deletar(pedido) {
        let sql = "DELETE FROM tb_pedido WHERE ped_id = ?";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [pedido.id]);

        return consulta;
    }

    async obterPorId(pedido) {
        let sql = "SELECT * FROM tb_pedido WHERE ped_id = ?";
        let consulta = await this.db.ExecutaComando(sql, [pedido.id]);

        return this.toMAP(consulta[0]);
    }

    toMAP(rows) {
        if (typeof rows.length == "number") {
            let lista = [];
            for (let row of rows) {
                let pedido = new PedidoEntity();
                pedido.id = row['ped_id'];
                pedido.usuario = row['usu_nome'];
                pedido.produto = row['pro_nome'];
                pedido.quantidade = row['quantidade'];

                lista.push(pedido);
            }
            return lista;

        } else {
            let pedido = new PedidoEntity();
            pedido.id = rows['ped_id'];
            pedido.usuario = rows['usu_id'];
            pedido.produto = rows['pro_id'];
            pedido.quantidade = rows['quantidade'];

            return pedido;
        }
    }

}
