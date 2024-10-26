import UsuarioEntity from "../entities/usuario.entity.js";
import BaseRepository from "./baseRepository.js";

export default class UsuarioRepository extends BaseRepository {

    constructor(db) {
        super(db);
    }

    async obterTodos() {
        let sql = "SELECT * FROM tb_usuario";
        let consulta = await this.db.ExecutaComando(sql);

        return this.toMAP(consulta);
    }

    async obterPorId(id) {
        let sql = "SELECT * FROM tb_usuario WHERE usu_id = ?";
        let consulta = await this.db.ExecutaComando(sql, [id]);
        
        return this.toMAP(consulta);
    }

    async inserir(usuario) {
        let sql = "INSERT INTO tb_usuario (usu_nome, usu_email, usu_idade) VALUES (?, ?, ?)";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [usuario.nome, usuario.email, usuario.idade]);
        
        return consulta;
    }

    async atualizar(usuario) {
        let sql = "UPDATE tb_usuario SET usu_nome = ?, usu_email = ?, usu_idade = ? WHERE usu_id = ?";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [usuario.nome, usuario.email, usuario.idade, usuario.id]);
        
        return consulta;
    }

    async deletar(id) {
        let sql = "DELETE FROM tb_usuario WHERE usu_id = ?";
        let consulta = await this.db.ExecutaComandoNonQuery(sql, [id]);
        
        return consulta;
    }


    toMAP(rows) {
        if (typeof rows.length == "number") {
            let lista = [];
            for (let row of rows) {
                let usuario = new UsuarioEntity();
                usuario.id = row['usu_id'];
                usuario.nome = row['usu_nome'];
                usuario.email = row['usu_email'];
                usuario.idade = row['usu_idade'];

                lista.push(usuario);
            }
            return lista;

        } else {
            let usuario = new UsuarioEntity();
            usuario.id = rows['usu_id'];
            usuario.nome = rows['usu_nome'];
            usuario.email = rows['usu_email'];
            usuario.idade = rows['usu_idade'];

            return usuario;
        }
    }


}