import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Adicionar itens na minha lista de toDo', () => {
    /**
     * Dado - BEFORE -> Antes do primeiro teste
     * BEFORE EACH -> Antes de cada teste
     */

    beforeEach(() => {
        cy.visit('/');
    });

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Fazer atividade");
        telaInicial.inputText("Comprar pilhas");
    });

    it('Adicionar mais de um item na lista', () => {

        var todoItens = ["Maça", "Banana", "Cenoura", "Abobrinha"]

        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item);
        })
    });
});