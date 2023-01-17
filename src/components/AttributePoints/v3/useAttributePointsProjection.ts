import {useRef, useState} from 'react';
import {type Attribute} from 't20-sheet-builder';
import {type AttributeModifier} from '../AttributeModifier';
import {type AttributesPoints} from './AttributePoints';
import {useAttributePoints} from './useAttributePoints';

type AttributePointsDto = {
	attributes: Record<Attribute, AttributeModifier>;
	points: number;
};

export const useAttributePointsProjection = () => {
	const attributePointsRef = useAttributePoints();
	const [projection, setProjection] = useState(projectAttributePoints(attributePointsRef));

	return {
		...projection,
		increment(attribute: Attribute) {
			attributePointsRef.increment(attribute);
			setProjection(projectAttributePoints(attributePointsRef));
		},
		decrement(attribute: Attribute) {
			attributePointsRef.decrement(attribute);
			setProjection(projectAttributePoints(attributePointsRef));
		},
	};
};

const projectAttributePoints = (attributePoints: AttributesPoints): AttributePointsDto => ({
	attributes: attributePoints.getAttributes(),
	points: attributePoints.getPoints(),
});
