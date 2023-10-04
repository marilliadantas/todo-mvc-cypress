import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Deletar itens da lista', () => {
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

    it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
    })
});