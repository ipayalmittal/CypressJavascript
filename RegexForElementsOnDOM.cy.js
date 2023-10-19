describe("Using Regex for elemnts/locators on DOM test",() =>
        xit("Test without regex for elements on DOM ", () =>{
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/",{timeout:300000})
        //cy.get("button").click()
        cy.contains(/Element$/).click()
        
        cy.get("button.added-manually").should("be.visible")
    }),   

    it("Test with regex for elements on DOM ", () =>{
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/",{timeout:300000})
        cy.contains(/Element$/).click()
        
        cy.contains(/^Del/).should("be.visible")
    })   

    )