import BaseEntity from "./baseEntity.js";

export default class ProdutoEntity extends BaseEntity {

    #proId;
    #proNome;
    #proDescricao;
    #proEstoque;

    constructor(id, nome, descricao, estoque) {
        super();
        this.#proId = id;
        this.#proNome = nome;
        this.#proDescricao = descricao;
        this.#proEstoque = estoque;
    }

    get proId() {
        return this.#proId;
    }

    get proNome() {
        return this.#proNome;
    }

    get proDescricao() {
        return this.#proDescricao
    }

    get proEstoque() {
        return this.#proEstoque;
    }

    set proId(value) {
        this.#proId = value;
    }

    set proNome(value) {
        this.#proNome = value;
    }

    set proDescricao(value) {
        this.#proDescricao = value;
    }

    set proEstoque(value) {
        this.#proEstoque = value;
    }
}