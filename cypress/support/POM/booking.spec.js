export class Booking{
    static getJourney(){
        return cy.get('a[href*="Old-and-New-Delhi-City-Tour"]')
    }
    static changeDate(){
        return cy.get("input[name='date'][type='text']")
    }
    static getSubmitButton(){
        return cy.get('button[type="submit"]')
    }
    static firstName(){
        // return cy.get('input[name="firstname"]')
        return cy.get('span').contains("First Name")
    }
    static lastName(){
        //return cy.get('input[name="lastname"]')
        return cy.get('span').contains("Last Name")
    }
    static email(){
        return cy.get('span').contains("Email")
    }
    static confirmEmail(){
        return cy.get('span').contains("Confirm")
    }
    static phone(){
        return cy.get('span').contains("Contact Number")
    }
    static address(){
        return cy.get('span').contains("Address")
    }
    static country(){
        return cy.get('.chosen-single > span')
    }
    static checkTravelInsurance(){
        return cy.get('input[type="checkbox"][id="7"]')
    }
    static infoHeader(){
        return cy.get('.content > h4')
    }
    static arrivalPayButton(){
        return cy.get('.arrivalpay')
    }
    static successBox(){
        return cy.get('div[class="success-box reserved"]')
    }
    static getAlert(){
        return cy.get('.result > .alert')
    }
}