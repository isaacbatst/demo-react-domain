import {useState, useCallback} from 'react';
import {type Attribute} from 't20-sheet-builder';
import {AttributeModifier} from '../AttributeModifier';

const prices: Record<AttributeModifier, number> = {
	[AttributeModifier.minusOne]: -1,
	[AttributeModifier.zero]: 0,
	[AttributeModifier.one]: 1,
	[AttributeModifier.two]: 2,
	[AttributeModifier.three]: 4,
	[AttributeModifier.four]: 7,
};

export const useAttributePoints = () => {
	const [attributes, setAttributes] = useState<Record<Attribute, AttributeModifier>>({
		strength: 0,
		dexterity: 0,
		constitution: 0,
		intelligence: 0,
		wisdom: 0,
		charisma: 0,
	});

	const [points, setPoints] = useState(10);

	const isValidAttributeModifier = (attribute: number): attribute is AttributeModifier => attribute in AttributeModifier;

	const increment = useCallback((attribute: Attribute) => {
		const attributeValue = attributes[attribute];
		if (points === 0) {
			return;
		}

		const incrementedAttribute = attributeValue + 1;
		if (!isValidAttributeModifier(incrementedAttribute)) {
			return;
		}

		const incrementPrice = Math.abs(prices[attributeValue] - prices[incrementedAttribute]);
		const calculatedPoints = points - incrementPrice;
		if (calculatedPoints < 0) {
			return;
		}

		setPoints(calculatedPoints);
		setAttributes({
			...attributes,
			[attribute]: incrementedAttribute,
		});
	}, [attributes, points]);

	const decrement = useCallback((attribute: Attribute): void => {
		const attributeValue = attributes[attribute];
		const decrementedAttribute = attributeValue - 1;
		if (!isValidAttributeModifier(decrementedAttribute)) {
			return;
		}

		const decrementRefund = Math.abs(prices[attributeValue] - prices[decrementedAttribute]);
		const calculatedPoints = points + decrementRefund;
		setPoints(calculatedPoints);
		setAttributes({
			...attributes,
			[attribute]: decrementedAttribute,
		});
	}, [attributes, points]);

	return {
		increment,
		decrement,
		attributes,
		points,
	};
};
