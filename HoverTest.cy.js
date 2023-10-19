
describe("API Testing",() =>
    it("API testing with Cypress", () =>
    {        
        cy.visit('https://testpages.herokuapp.com/styled/csspseudo/css-hover.html')
         //cy.get("#hoverpara").click()

         //option 1 is to use mouseover
         //cy.get("#hoverpara").trigger('mouseover')

         //option 2 to make the text show
         //cy.get("#hoverparaeffect").invoke('show')

         //option 3
         cy.get("#hoverpara").realHover('mouse')

         //To debug we have to add .debug on the line and also can pause any step and then resume while running the test
         //cy.get("#hoverpara").realHover('mouse').debug()
         //cy.pause()
         
         cy.get('#hoverparaeffect').should('be.visible')
    })
    
)





