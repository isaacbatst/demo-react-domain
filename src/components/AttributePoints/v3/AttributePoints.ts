import {type Attribute} from 't20-sheet-builder';
import {AttributeModifier} from '../AttributeModifier';

export class AttributesPoints {
	static prices: Record<AttributeModifier, number> = {
		[AttributeModifier.minusOne]: -1,
		[AttributeModifier.zero]: 0,
		[AttributeModifier.one]: 1,
		[AttributeModifier.two]: 2,
		[AttributeModifier.three]: 4,
		[AttributeModifier.four]: 7,
	};

	static isValidAttributeModifier = (attribute: number): attribute is AttributeModifier => attribute in AttributeModifier;

	private points = 10;
	private readonly attributes: Record<Attribute, AttributeModifier> = {
		strength: 0,
		dexterity: 0,
		constitution: 0,
		intelligence: 0,
		wisdom: 0,
		charisma: 0,
	};

	getAttributes() {
		return this.attributes;
	}

	getPoints() {
		return this.points;
	}

	increment(attribute: Attribute) {
		const attributeValue = this.attributes[attribute];
		if (this.points === 0) {
			return;
		}

		const incrementedAttribute = attributeValue + 1;
		if (!AttributesPoints.isValidAttributeModifier(incrementedAttribute)) {
			return;
		}

		const incrementPrice = Math.abs(AttributesPoints.prices[attributeValue] - AttributesPoints.prices[incrementedAttribute]);
		const calculatedPoints = this.points - incrementPrice;
		if (calculatedPoints < 0) {
			return;
		}

		this.points = calculatedPoints;
		this.attributes[attribute] = incrementedAttribute;
	}

	decrement(attribute: Attribute): void {
		const attributeValue = this.attributes[attribute];
		const decrementedAttribute = attributeValue - 1;
		if (!AttributesPoints.isValidAttributeModifier(decrementedAttribute)) {
			return;
		}

		const decrementRefund = Math.abs(AttributesPoints.prices[attributeValue] - AttributesPoints.prices[decrementedAttribute]);
		const calculatedPoints = this.points + decrementRefund;
		this.points = calculatedPoints;
		this.attributes[attribute] = decrementedAttribute;
	}
}
