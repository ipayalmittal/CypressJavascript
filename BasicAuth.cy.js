describe("How to ... Basic auth",() =>{

    it("Basic auth 1", () =>
    {        
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("p").should("include.text","Congratulations")         
    })

    it("Basic auth 2", () =>
    {        
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            headers:{
                Authorization:"Basic YWRtaW46YWRtaW4="
            }
        })


        cy.get("p").should("include.text","Congratulations")         
    })    
}
)