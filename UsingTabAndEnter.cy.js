import {faker} from '@faker-js/faker';

describe("Automation in testing site",() =>
    it("Fill form", () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        cy.tab();
        //cy.focused().type("faker.person.firstName")

        //Clears one char
        //cy.focused().type('{backspace}')
        //Append
        //cy.focused().type('{ctrl} test')

        //Select all and backspace
        //cy.focused().type('{selectall}')
        //cy.focused().type('{backspace}')

        
        cy.get("#name").type("Sally")
        cy.get("#email").type("Abc@gmail.com")
        cy.get("#phone").type("12345678912")
        cy.get("#subject").type("Regarding room")
        cy.get("#description").type("Test test nbvnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")

        cy.tab()
        
        //1. cy.focused().click()
        //2. cy.get("#submitContact").realPress('{enter}')
        //3. cy.focused().realPress('{enter}')
        cy.get(":nth-child(2) > div > h2").contains("Thanks for getting in touch")  
    })      
)