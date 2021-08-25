export class Ats{
    static getCategory (){
       return cy.get('.subnav .nav-pills > li')
    }

    static getProdList(){
       return cy.get('.fixed .prdocutname')
    }

    static getAlias(){
      return  cy.get('@productThumbnail')
    }

    static getThumbnail(){
        return cy.get('.thumbnail')
    }

    static getAsPrice(){
        return cy.get('@itemPrice')
    }

    static getAsSalePrice(){
        return cy.get('@saleItemPrice')
    }
}