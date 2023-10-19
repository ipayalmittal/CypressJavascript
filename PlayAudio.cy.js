
describe('Play musis',() => {
    it('Lost', () => {
        //Download a file in cypress/audio/Someaudiofile.mp3
        cy.readFile('audio/sound.mp3', 'base64').then((mp3) => {
            const uri = 'data:audio/mp3;base64,' + mp3
            const audio = new Audio(uri)
          
            audio.play()
          })
    })
})