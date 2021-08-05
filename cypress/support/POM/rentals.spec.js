export class Rentals{
    static accessUrl(){
        return cy.get('a[href="//www.phptravels.net"]:nth-child(1)')
    }
    static getRentals(){
        return cy.get('[data-name="rentals"]')
    }
    static searchByHotel(){
        return cy.get('#s2id_autogen5')
    }
    static rentalType(){
        return cy.get('#rentaltype_chosen > .chosen-single').click({force:true}).get('[data-option-array-index="4"]').click({force:true})
    }
    static adults(){
        return cy.get('button').contains('+')
    }
    static searchButton(){
        return cy.get('button[type="submit"]').contains('Search').click({force:true})
    }
    static result(){
        return cy.get('h1').contains('No Results Found')
    }
}