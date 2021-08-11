export class Contact{
    static goToContact(){
        return cy.get('#footer a[href*="contact-us"]')
    }

    static getName(){
        return cy.get('#form_name').click({force:true})
    }
    static getEmail(){
        return cy.get('#form_email').click({force:true})
    }
    static getSubject(){
        return cy.get('#form_subject').click({force:true})
    }
    static getMessage(){
        return cy.get('#form_message').click({force:true})
    }
    
}