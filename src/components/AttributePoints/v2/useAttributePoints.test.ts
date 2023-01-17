import {renderHook} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {useAttributePoints} from './useAttributePoints';

describe('useAttributePoints', () => {
	it('should have initial points', () => {
		const {result} = renderHook(() => useAttributePoints());

		expect(result.current.points).toBe(10);
	});

	it('should have initial attributes', () => {
		const {result} = renderHook(() => useAttributePoints());

		expect(result.current.attributes.charisma).toBe(0);
		expect(result.current.attributes.constitution).toBe(0);
		expect(result.current.attributes.dexterity).toBe(0);
		expect(result.current.attributes.intelligence).toBe(0);
		expect(result.current.attributes.strength).toBe(0);
		expect(result.current.attributes.dexterity).toBe(0);
	});

	it('should increment strength and decrement points', () => {
		const {result} = renderHook(() => useAttributePoints());
		act(() => {
			result.current.increment('strength');
		});
		expect(result.current.attributes.strength).toBe(1);
		expect(result.current.points).toBe(9);
	});

	it('should decrement charisma and increment points', () => {
		const {result} = renderHook(() => useAttributePoints());
		act(() => {
			result.current.decrement('charisma');
		});
		expect(result.current.attributes.charisma).toBe(-1);
		expect(result.current.points).toBe(11);
	});
});
