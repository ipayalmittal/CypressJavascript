describe("clear logs",() =>

    it("CLear logs",()=>{
        cy.visit("https://shiftsync.tricentis.com/")

        cy.get("#downshift-2-input").clear("IO")
        cy.get("#downshift-2-input").type('Ioan{enter}')

        cy.get(".list__items--topic-count").should('be.visible')
        cy.get(".list__items--topic-count").should('have.text','15 Topics')
    })
    )