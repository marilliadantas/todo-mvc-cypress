import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Concluir itens na minha lista de toDo', () => {
    /**
     * Dado - BEFORE -> Antes do primeiro teste
     * BEFORE EACH -> Antes de cada teste
     */

    beforeEach(() => {
        cy.visit('/');
        var todoItens = ["Maça", "Banana", "Cenoura", "Abobrinha"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item);
        })
    });

    it('Concluir um item na lista de toDo', () => {
        telaInicial.concluirItem();
    });
});