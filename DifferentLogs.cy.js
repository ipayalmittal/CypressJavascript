describe("different types of logs",() =>
    xit("Log types", () =>{
        cy.visit("https://automationintesting.online/",{timeout:30000})
       
        cy.log('**This is a bold message**')
        cy.log('*This is a italic message*')
        cy.log('This is a funny message! ')
        cy.log('*This is a italic message*')
        cy.log("Hello, this is a 😀 happy emoji!");
        cy.log("This is a 🌍 globe emoji.");
        //cy.log("`code`");
        //cy.log("That is so funny! :joy:");
    })    
)