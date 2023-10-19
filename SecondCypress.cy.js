
describe('Dropdown example on selenium practise', () => {
    xit("Dropdown example",() => {
        cy.visit('http://seleniumpractise.blogspot.com/2019/01/dropdown-demo-for-selenium.html',{timeout : 30000})
        
        //cy.get("select[id='tools']").select("Docker")
        //We can use value also or index
        cy.get("select[id='tools']").select("Docker").find(":selected").contains("Docker")
        cy.get("select[id='tools']").select(3)
        cy.get("select[id='tools1']").select("Cucumber")

    })
});


describe('Dropdown example with multiple selection', () => {
    xit("Dropdown multi select example",() => {
        cy.visit('https://demo.mobiscroll.com/select/multiple-select',{timeout : 50000})
        
        //cy.get("select#multiple-select-select").select("Books")
        
        cy.get("#multiple-select-context").click()
        
        //cy.get("#single-select-select").select("Berlin",{force: true})

        })
});


describe('Bootstrap dropdown example', () => {
    xit("bootstrap dropdown example",() => {
        cy.visit('http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html?m=1',{timeout : 50000})
        
        cy.get("#menu1").click()
        cy.get("a[role='presentation']").each(function ($ele,index,list) 
        {
            //cy.log($ele.text())

          if($ele.text()==="Javascript")
          {
            cy.log("Found element")
            cy.wrap($ele).click()
            cy.title().should("include","Selenium")
          }    
          else{
            cy.log("Still searching")
          }
        })            
        
    })
});

describe('Click specific option from dropdown example', () => {
    it("Click specific option from dropdown",() => {
        cy.visit('https://www.google.com/',{timeout : 50000})
        
        cy.get("textarea[name='q']").type("cypress")
        cy.get("div[role='option']").each(function($ele,index,$list){
        cy.log($ele.text())
            
            if($ele.text().includes("Cypress Hill"))
            {
                //Pause test running
                cy.pause()
                cy.wrap($ele).click()
                cy.log("Element found")
            }
            else
            {
                cy.log("Still searching")
            }
        })        
})
});





