/// <reference types="cypress" />

import { Rentals } from "../support/POM/rentals.spec"

describe('Search rentals using the second window', ()=> {

    it('Search for a rental', () => {
        cy.visit('https://phptravels.com/demo/')
        Rentals.accessUrl().invoke('removeAttr','target').click({force:true})
        Rentals.getRentals().click()
        Rentals.searchByHotel().type('Montreal, Canada{enter}')
        Rentals.rentalType()
        Rentals.adults().click({force:true})
        Rentals.searchButton().click({force:true})
        //Rentals.result().should('contain', "No Results Found")
    })


})