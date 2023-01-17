import {useRef} from 'react';
import {type Attribute} from 't20-sheet-builder';
import {type AttributeModifier} from '../../../AttributeModifier';
import {AttributesPoints} from './AttributePoints';

export const useAttributePoints = () => {
	const ref = useRef<AttributesPoints>();

	if (!ref.current) {
		ref.current = new AttributesPoints();
	}

	return ref.current;
};
