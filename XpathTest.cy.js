describe('Login test using Xpath', () => {
    xit("Login using xpath",() => {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{timeout : 30000})
        cy.visit('',{timeout:30000})
        cy.xpath("//input[@name='username']").type("Admin").should("have.value","Admin")
        cy.xpath("//input[@name='password']").type("admin123").should("have.value","admin123")
        cy.xpath("//button[@type='submit']").click()
    })
});