
describe("Multiple clicks",() =>
    xit("No delay", () =>{
        cy.visit("https://clickercounter.org/5-seconds",{timeout:30000})
       
        //Clicking in normal way
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
        cy.get("#start").click()
    }))

describe("Multiple clicks",() =>
xit("Using for loop", () =>{
    cy.visit("https://clickercounter.org/5-seconds",{timeout:30000})
   
    for (let index = 0; index < 1000; index++) {
        cy.get("#start").click({force: true})
    }    
}))

describe("Install multiple click plugin",() =>
it("Using for loop", () =>{
    cy.visit("https://clickercounter.org/5-seconds",{timeout:30000})
       
        cy.get("#start").click()
        //cy.get("body").clicks()
}))

/* describe('cypress-plugin-multiple-click', () => {
    beforeEach(() => {
      cy.visit('cypress/e2e/index.html');
    });
  
    it('should check if plugin is installed', () => {
      expect(cy).property('clicks').to.be.a('function');
    });
  
    it('should click on plus button 3 times', () => {
      cy.get('#count').should('have.text', 0).as('count');
      cy.get('#increase').clicks(3);
      cy.get('@count').should('have.text', 3);
    });
  });
 */