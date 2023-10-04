import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Validar os filtrosda aplicação após adição de itens', () => {
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

        telaInicial.concluirItem();
    });

    /**
     * clicar no filtro
     * o item ser exibido
     * e o contador deve bater com a informação
     */

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
    });

    it('Filtrar itens concluídos', () => {
        telaInicial.filtrarItem("All")
    });
});