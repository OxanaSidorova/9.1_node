const calculateBonus = require('./9.2')

describe ("Testing bonus",()=> {
    it ('sum of value', ()=> {
    expect(calculateBonus(20,20)).toBe(40); //if sum <50 then bonus=sum. 20=20, 
   
    expect(calculateBonus(100,50)).toBe(150) ; //if sum >50 then bonus=50. 
    })
    it ('cheking bonus value',()=> {
    expect(calculateBonus(20,20)).toBeGreaterThan(150) ; //if sum >50 then bonus=5
    
    })
})
