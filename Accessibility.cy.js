//The site has issue so these tests does not work
describe("Accessing old testing site",() =>
    xit("Shows issues", () =>{
        cy.visit("http://www.gatesnfences.com/",{timeout:30000})
        cy.wait(6000)
        cy.injectAxe()
        cy.checkA11y()
       
    }),

    xit("Does not show issue when loading ", () =>{
        cy.visit("http://www.gatesnfences.com/",{timeout:300000})
        cy.wait(6000)
        cy.injectAxe()
        cy.checkA11y(null,null,null,true)
    })   


    )