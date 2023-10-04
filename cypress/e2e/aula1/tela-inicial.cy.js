/**
 * Feature -> describe
 * Background -> contexto ou beforeEach
 * Caso de teste -> it
 */

import telaInicial from "../../support/pageObjects/tela-inicial.page"

describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/vanillajs/')
    telaInicial.inputText();
  })
})