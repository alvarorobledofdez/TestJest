const ejercito=require('./ejercito');

describe('valdiar edad',()=>{
	it('Edad positiva',()=>{
		expect(ejercito(6)).toBe(false);
		expect(ejercito(24)).toBe(true);
		expect(ejercito(60)).toBe(false);
	});
	it('Edad negativa',()=>{
		expect(ejercito(-5)).toBe(false);

	});
})