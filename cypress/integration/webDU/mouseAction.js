/// <reference types="cypress" />

import { WebDriverUniversity } from "../../support/POM/wdu"

describe('Mouse actions', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
    })

    it('1. Scroll element into view', () =>{
        WebDriverUniversity.getActions().scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it('2. Drag and drop', () =>{
        WebDriverUniversity.getActions().scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getDraggable().trigger('mousedown', {which: 1})

        WebDriverUniversity.getDroppable().trigger('mousemove').trigger('mouseup', {force:true})
    })

    it('3. Double mouse click', () =>{
        WebDriverUniversity.getActions().scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getDoubleClickEl.apply().dblclick()
    })

    it('4. Hold down the left mouse click button on a given element', () =>{
        WebDriverUniversity.getActions().scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        WebDriverUniversity.getClickBox().trigger('mousedown', {which: 1}).then(($element)=>{
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })

})