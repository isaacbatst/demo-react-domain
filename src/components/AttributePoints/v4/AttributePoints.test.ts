import {AttributesPoints} from './AttributePoints';

describe('AttributesPoints', () => {
	it('should have initial points', () => {
		const attributePoints = new AttributesPoints();
		expect(attributePoints.getPoints()).toBe(10);
	});
	it('should have initial attributes', () => {
		const attributePoints = new AttributesPoints();
		expect(attributePoints.getAttributes().charisma).toBe(0);
		expect(attributePoints.getAttributes().dexterity).toBe(0);
		expect(attributePoints.getAttributes().constitution).toBe(0);
		expect(attributePoints.getAttributes().strength).toBe(0);
		expect(attributePoints.getAttributes().wisdom).toBe(0);
		expect(attributePoints.getAttributes().intelligence).toBe(0);
	});
	it('should increment strength and decrement points', () => {
		const attributePoints = new AttributesPoints();
		attributePoints.increment('strength');
		expect(attributePoints.getAttributes().strength).toBe(1);
		expect(attributePoints.getPoints()).toBe(9);
	});
	it('should decrement charisma and increment points', () => {
		const attributePoints = new AttributesPoints();
		attributePoints.decrement('charisma');
		expect(attributePoints.getAttributes().charisma).toBe(-1);
		expect(attributePoints.getPoints()).toBe(11);
	});
});
