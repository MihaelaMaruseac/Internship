/// <reference types="cypress" />

import { General } from "../support/POM/general.spec"

describe('Tests based on Udemy course', ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify the document', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include','PHPTRAVELS | Travel Technology Partner')
        cy.url().should('include','home')
        General.getHeader().should('have.css','background-color', 'rgb(43, 43, 43)')
        General.getHomeText().should('have.css', 'font-family', '"Muli Regular", sans-serif')
    })

    it('Get first journey using index', () =>{
        General.getFirstJourney().find('.featured-image-grid-item').eq(0).click()
    })


})