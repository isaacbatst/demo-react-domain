import {type Attributes} from 't20-sheet-builder';
import {type AttributePointsDto, type AttributesPointsInterface} from './AttributePoints';
import {AttributesPointsDecorator} from './AttributePointsDecorator';

export class AttributesPointsDecoratorProjection extends AttributesPointsDecorator {
	constructor(
		attributePoints: AttributesPointsInterface,
		private readonly setProjection: (projection: AttributePointsDto) => void,
	) {
		super(attributePoints);
	}

	decrement(attribute: keyof Attributes): void {
		super.decrement(attribute);
		this.setProjection(this.getProjection());
	}

	increment(attribute: keyof Attributes): void {
		super.increment(attribute);
		this.setProjection(this.getProjection());
	}

	private getProjection(): AttributePointsDto {
		return {
			attributes: super.getAttributes(),
			points: super.getPoints(),
		};
	}
}
