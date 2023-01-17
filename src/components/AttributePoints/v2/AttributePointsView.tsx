import React from 'react';
import {type Attribute} from 't20-sheet-builder';
import AttributeInput from '../../AttributeInput.tsx/AttributeInput';
import {useAttributePoints} from './useAttributePoints';

const AttributePointsView: React.FC = () => {
	const {attributes, decrement, increment, points} = useAttributePoints();

	return (
		<div>
			<h3 className='mb-3'>Compra de pontos</h3>
			<div role='status' aria-label='Pontos'>Restante: {points}</div>
			<div className='flex justify-evenly mb-3'>
				{Object.entries(attributes).map(([key, value]) => {
					const attribute = key as Attribute;
					return (
						<AttributeInput
							key={attribute}
							attribute={attribute}
							value={value}
							decrement={() => {
								decrement(attribute);
							}}
							increment={() => {
								increment(attribute);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AttributePointsView;
