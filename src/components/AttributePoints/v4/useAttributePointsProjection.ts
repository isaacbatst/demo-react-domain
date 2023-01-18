import {useRef, useState} from 'react';
import {type Attribute} from 't20-sheet-builder';
import {type AttributeModifier} from '../AttributeModifier';
import {type AttributesPoints} from './AttributePoints';
import {AttributesPointsDecoratorProjection} from './AttributePointsDecoratorProjection';
import {useAttributePoints} from './useAttributePoints';

type AttributePointsDto = {
	attributes: Record<Attribute, AttributeModifier>;
	points: number;
};

export const useAttributePointsProjection = () => {
	const attributePointsRef = useAttributePoints();
	const [projection, setProjection] = useState(AttributesPointsDecoratorProjection.getProjection(attributePointsRef));

	return new AttributesPointsDecoratorProjection(attributePointsRef, setProjection);
};