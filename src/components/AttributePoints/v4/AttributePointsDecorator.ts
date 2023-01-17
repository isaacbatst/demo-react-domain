import {type Attributes} from 't20-sheet-builder';
import {type AttributeModifier} from '../../../AttributeModifier';
import {type AttributesPointsInterface} from './AttributePoints';

export class AttributesPointsDecorator implements AttributesPointsInterface {
	constructor(
		protected attributePoints: AttributesPointsInterface,
	) {}

	decrement(attribute: keyof Attributes): void {
		this.attributePoints.decrement(attribute);
	}

	increment(attribute: keyof Attributes): void {
		this.attributePoints.increment(attribute);
	}

	getAttributes(): Record<keyof Attributes, AttributeModifier> {
		return this.attributePoints.getAttributes();
	}

	getPoints(): number {
		return this.attributePoints.getPoints();
	}
}
