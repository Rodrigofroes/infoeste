import BaseEntity from "./baseEntity.js";

export default class PedidoEntity extends BaseEntity {
    #id;
    #usuario;
    #produto;
    #quantidade;

    constructor(id, usuario, produto, quantidade) {
        super();
        this.#id = id;
        this.#usuario = usuario;
        this.#produto = produto;
        this.#quantidade = quantidade;
    }

    get id() {
        return this.#id;
    }

    get usuario() {
        return this.#usuario;
    }

    get produto() {
        return this.#produto;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set id(value) {
        this.#id = value;
    }

    set usuario(value) {
        this.#usuario = value;
    }

    set produto(value) {
        this.#produto = value;
    }

    set quantidade(value) {
        this.#quantidade = value;
    }
}


