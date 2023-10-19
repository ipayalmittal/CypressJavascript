describe("Automation in testing site",() =>
    xit("Fill form", () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
        cy.get("#name").type("Sally")
        cy.get("#email").type("Abc@gmail.com")
        cy.get("#phone").type("12345678912")
        cy.get("#subject").type("Regarding room")
        cy.get("#description").type("Test test nbvnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        cy.get("#submitContact").click()
        cy.get(":nth-child(2) > div > h2").should("have.text","Thanks for getting in touch Abc!")     
    })      
)


