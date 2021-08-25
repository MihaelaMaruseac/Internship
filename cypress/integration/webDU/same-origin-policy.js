/// <reference types="cypress" />

describe('Alias & invoke', ()=> {

    it('Validate visiting 2 different domains - FAIL', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
    })

    it('Validate visiting 2 different domains via user actions', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })


})