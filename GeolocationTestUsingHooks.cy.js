describe('Your location',()=>{
    xit('My location',function(){
        cy.visit('https://www.w3schools.com/html/html5_geolocation.asp')

        //Try it click will not work
        cy.get("button[class='w3-btn w3-blue w3-round']").click()
    })

    xit('Where is the tester',function(){
        cy.visit('https://www.w3schools.com/html/html5_geolocation.asp',{
            onBeforeLoad(win){
                const latitude = 52.5200;
                const longitude = 13.4050;

                cy.stub(win.navigator.geolocation,'getCurrentPosition').callsFake((cb) => {
                    return cb({coords: {latitude,longitude}});
                })                
            }
        })
    })
})