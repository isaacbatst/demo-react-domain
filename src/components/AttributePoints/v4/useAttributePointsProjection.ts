import {useState} from 'react';
import {AttributesPointsDecoratorProjection} from './AttributePointsDecoratorProjection';
import {useAttributePoints} from './useAttributePoints';

export const useAttributePointsProjection = () => {
	const attributePointsRef = useAttributePoints();
	const [projection, setProjection] = useState(AttributesPointsDecoratorProjection.getProjection(attributePointsRef));

	return new AttributesPointsDecoratorProjection(attributePointsRef, setProjection);
};
