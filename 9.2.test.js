const calculateBonus = require('./9.2')

describe ("Testing bonus value when sum>50",()=> {
    it ('sum of value', ()=> {
    expect(calculateBonus(100,50)).toBe(50); //bonus 50 
    expect(calculateBonus(20,30)).toEqual(50) ; 
    })
    
    }
    )
  
    describe ("Testing bonus =sum",()=> {
        it ('check bonus value if sum <50 ', ()=> {
        expect(calculateBonus(10,20)).toBe(30);  
    })
    
}
)
describe ("Testing bonus =sum",()=> {
    it ('check bonus value if sum <50 tobe', ()=> {
expect(calculateBonus(20,20)).toBeLessThan(50) ; 
})
    
}
)
