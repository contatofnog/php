var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Vowel Replacer (unit tests)\n', () => {
    it('[Test 1] Expected: "th# ##rdv#rk"', () => 
        assert.equal(e.replaceVowels("the aardvark", "#"), "th# ##rdv#rk")
    )
    it('[Test 2] Expected: "m?nn?? m??s?"', () => 
        assert.equal(e.replaceVowels("minnie mouse", "?"), "m?nn?? m??s?")
    )
    it('[Test 3] Expected: "sh*k*sp**r*"', () => 
        assert.equal(e.replaceVowels("shakespeare", "*"), "sh*k*sp**r*")
    )
    it('[Test 4] Expected: "<ll <s f<<r <n l<v< <nd w<r"', () => 
        assert.equal(
            e.replaceVowels("all is fair in love and war", "<"), 
            "<ll <s f<<r <n l<v< <nd w<r"
        )
    )
})
