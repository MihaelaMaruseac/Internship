/// <reference types="cypress" />

import { Booking } from "../support/POM/booking.spec"

describe('Run in a new window', ()=> {
    // it('Try', ()=>{
    //     cy.window().then(win => {
    //     cy.stub(win, 'open').as('open')
    //      })
    //     cy.visit('https://phptravels.com/demo/')
    //     cy.xpath('//*[text()="http://www.phptravels.net"]').invoke('removeAttr', 'target').click()
    //     cy.window().its('open').should('be.called')
    //     Booking.getJourney().click()
    // })

    it('First page', () => {
        cy.visit('https://phptravels.com/demo/', {
            onBeforeLoad(win) {
                cy.stub(win, 'open')
            }
        })
        cy.xpath('//*[text()="http://www.phptravels.net"]').invoke('removeAttr', 'target').click()
        cy.window().its('open').should('be.called')
    })

    it('Second page', () =>{
        Booking.getJourney().click()
    })

    /////
//    it('1', () =>{
//     cy.visit('https://phptravels.com/demo/')
//     cy.window().then((win) =>{
//         cy.spy(win,'open').as('redirect')
//     })
//     cy.xpath('//*[text()="http://www.phptravels.net"]').click()

//     cy.get('@redirect').should('be.calledWith', '_blank', 'http://www.phptravels.net/home')
//     })

})