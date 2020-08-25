const wordScore = require('./scrabble')

describe("scrabble", () => {
   
    describe("wordScore", () => {
        it('total score of letters laid', () => {
            //set up
            const word = "cow"
            
            expect(wordScore(word)).toBe(8)
        })

    })
})