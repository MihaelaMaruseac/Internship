/// <reference types="cypress" />

import { Ats } from "../../support/POM/ats.spec"

describe('Alias & invoke', ()=> {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/') 
    })

    it('1. Validate a specific skincare product', () =>{
        Ats.getCategory().contains('Skincare').click()
        Ats.getProdList().eq(1).invoke('text').as('productThumbnail')
        Ats.getAlias().its('length').should('be.gt', 8)
        Ats.getAlias().should('include', 'Absolue Eye Precious Cells')
    })

    it('2. Validate product thumbnail', () =>{
        Ats.getThumbnail().as('productThumbnail')
        Ats.getAlias().should('have.length', 16)
        Ats.getAlias().find('.productcart').invoke('attr','title').should('include', 'Add to Cart')
    })

    it('3. Calculate total of normal and promotion products', () =>{
        Ats.getThumbnail().as('productThumbnail')
        // Ats.getAlias().find('.oneprice').each((($el, index, $list) =>{ 
        // }))
        Ats.getAlias().find('.oneprice').invoke('text').as('itemPrice')
        Ats.getAlias().find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0
        Ats.getAsPrice().then($linkText => {
            var itemsPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i
            for(i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log('Non promotion price items total: '+ itemsPriceTotal)
        })

        Ats.getAsSalePrice().then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$')
            var i
            for(i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice
            cy.log('Promotion(sale) price items total: '+ saleItemsPrice)
        })
        .then(() => {
            cy.log('The total price of all products: ' + itemsTotal)
            expect(itemsTotal).to.equal(616.7)
        })
    })
})
