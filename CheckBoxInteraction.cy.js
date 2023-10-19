describe("Site interaction",() =>
    it("Chekcbox", () =>{
        cy.visit("https://the-internet.herokuapp.com/",{timeout:30000})
        cy.get(':nth-child(6) > a')


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(6) > a').click();
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes > :nth-child(1)').uncheck();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes').should('be.visible');
        /* ==== End Cypress Studio ==== */
    }) 
)

describe('Checkbox example', () => {
    xit("check a checkbox example",() => {
        cy.visit('https://demo.guru99.com/test/radio.html',{timeout : 50000})
        
        cy.get("input[value='checkbox1']").check()
        cy.get("#vfb-7-1").check() //check({force:true})
        cy.get("#vfb-7-2").check("Option 2").should("be.checked")
        
        //Checkbox
        //cy.get("input[value='checkbox1']").first().check().should("be.checked")

        //Say one checkbox is disabled
        //cy.get("input[value='checkbox1']").check("whatever value",{force:true}).should("be.checked")
    })
});