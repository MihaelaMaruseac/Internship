export class Contact{
    static getContact(){
        return cy.get('.info_links_footer > :nth-child(5) > a')
    }
    static getFName(){
        return cy.get('#ContactUsFrm_first_name')
    }

    static getEmail(){
        return cy.get('#ContactUsFrm_email')
    }
    static getBox(){
        return cy.get('#ContactUsFrm_enquiry')
    }
    static getSubmit(){
        return cy.get('.col-md-6 > .btn')
    }
    static getConfirm(){
        return cy.get('.mb40 > :nth-child(3)')
    }

    static url(){
        return cy.url()
    }
}