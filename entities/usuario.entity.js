export default class UsuarioEntity {
    #id;
    #nome;
    #email;
    #idade;

    constructor(id, nome, email, idade) {
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

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            email: this.#email,
            idade: this.#idade
        }
    }
}