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
 
    it('Get a journey and log using then', () =>{
        General.getNile().click().then(() => {
            console.log('Hi in THEN!')
        })
    })

    it('View a journey using const', () =>{
        const journeyNile= General.getNile()
        journeyNile.click()
        // recomanded without const
    })
 
    it('Log a h2 text', () =>{
        General.geth2().then(($h2Text) =>{
            const h2Text = $h2Text.text()
            cy.log('Found h2 text: ' + h2Text)
            expect(h2Text).is.eq('Featured Tours')
        })
    })

    it.only('Iterating through each element', () =>{
        General.getAllCols().each(($el, index) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it.only('Iterating and select an element ', () =>{
        General.getAllCols().each(($el, index) => {
            if($el.text().includes('6 Days Around Thailand')){
                cy.wrap($el).click()
            }
        })
    })

})