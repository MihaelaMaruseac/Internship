/// <reference types="cypress" />

describe('Test file upload via WebDU', () => {

    it('Upload a file...', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("IEBlog.png", "base64" ).then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "IEBlog.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click();
        
    })

    it('Upload no file...', () =>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get("#submit-button").click();
        
    })
})