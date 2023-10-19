

describe("Locate hard elements using experimentalstudio Test",() =>
    it("Locate challenging elements", () =>{
        cy.visit("https://testpages.eviltester.com/styled/challenges/hard-selectors.html",{timeout:30000})


        /* ==== Generated with Cypress Studio ==== */
        cy.get('#select\\.me\\.by\\.id').click();
        cy.get('#select\\.me\\.by\\.id').should('be.visible');
        /* ==== End Cypress Studio ==== */
    })    
)