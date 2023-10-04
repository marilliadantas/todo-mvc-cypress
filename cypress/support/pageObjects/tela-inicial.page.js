const elem = require('../elements/tela-inicial.elements').Elements
const concluirItem = require('../elements/tela-inicial.elements').Itens
const filtroItem = require('../elements/tela-inicial.elements').Filtros

class telaInicial {
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        // .first()
        .last()
        .click()
    }

    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first() //pega o primeiro item
        .find('button') //encontra elemento
        .invoke('show') //mostra elementos que estão escondidos
        .click()
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    validarContador(numero){
        cy.get(filtroItem.contador)
        .find('strong')
        // .contains(numero)
        .should('have.text', numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }
}

export default new telaInicial();