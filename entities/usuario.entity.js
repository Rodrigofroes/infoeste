import BaseEntity from "./baseEntity.js";

export default class UsuarioEntity extends BaseEntity {

    #id;
    #nome;
    #email;
    #idade;

    constructor(id, nome, email, idade) {
        super();
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#idade = idade;
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get idade() {
        return this.#idade;
    }

    set id(id) {
        this.#id = id;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set email(email) {
        this.#email = email;
    }

    set idade(idade) {
        this.#idade = idade;
    }
}