describe("Stopping cypress to run on each change",() =>
    it("Stopping cypress to run", () =>{
        cy.visit("http://www.deadlinkcity.com/",{timeout:30000})
        //This site test also helps to find dead links 
        //Try link:https://learn.cypress.io/
       
        let urls = cy.get('a')

        cy.get('a').each(link => 
            {
                if(link.prop('href'))
                cy.request(
            {

                url: link.prop('href'),
                failOnStatusCode: false
            })
                cy.log(link.prop('href'))
            })
    }
    )    
)