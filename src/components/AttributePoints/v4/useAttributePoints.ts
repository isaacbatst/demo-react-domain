import {useRef} from 'react';
import {AttributesPoints} from './AttributePoints';

export const useAttributePoints = () => {
	const ref = useRef<AttributesPoints>();

	if (!ref.current) {
		ref.current = new AttributesPoints();
	}

	return ref.current;
};
