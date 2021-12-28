/// <reference types="cypress" />

describe("JSON Object", () =>{
    it("Json object  examples", () =>{
        const exObject= {"key": "Tim", "key2":"Jones"}
        const exArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exArrayOfObjects = [{"key": "Luke"}, {"key2": "22"}, {"key3":"Lone"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "age": 30,
            "students":[
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "fisrtName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exObject["key"])
        cy.log(exObject["key2"])
        cy.log(exObject.key2)

        cy.log(exArrayOfValues[0])
        cy.log(exArrayOfValues[1])

        cy.log(users.lastName)
        cy.log(users.students[0].lastName)

        cy.log(exArrayOfObjects[0].key)
        cy.log(exArrayOfObjects[1].key2)
        cy.log(exArrayOfObjects[2].key3)
    })
})