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
        //return cy.get('button').contains('+')
       // return cy.get('.btn.btn-white.bootstrap-touchspin-up').contains('+')
       return cy.xpath('//*[@id="rentals"]/div/div/form/div/div/div[3]/div/div/div/div/div/div/div[2]/div/div[2]/div/span/button[1]')
    }
    static searchButton(){
        return cy.xpath('//*[@id="rentals"]/div/div/form/div/div/div[4]/button')
        // return cy.get('[class="btn btn-primary btn-block"]').contains('Search')
    }
    static result(){
        return cy.get('.product-long-item-wrapper > h1')
    }
}