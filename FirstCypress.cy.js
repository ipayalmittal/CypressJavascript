describe('OrangeHRM Test Suite', function()
{
   it('Verify URL',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should("include","orangehrmlive")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })


    it('Verify Title',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("include","HRM")
        cy.title().should("eq","OrangeHRM")
    })

    it("Login and Logout",function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name = 'username']").type("Admin").should("have.value","Admin")
        cy.get("input[name = 'password']").type("admin123").should("have.value","admin123")
        cy.get("button[type='submit']").click()
        cy.get("p.oxd-userdropdown-name").should("have.text","Paul Collings")
        cy.get("p.oxd-userdropdown-name").click()
        cy.get("[role='menu']").find("li:last-child").click()       
    })

    it("Forgot Password",function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.contains("Forgot").click()       
    })
})
