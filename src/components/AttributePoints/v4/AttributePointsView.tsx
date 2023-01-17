import React from 'react';
import {type Attribute} from 't20-sheet-builder';
import AttributeInput from '../../AttributeInput/AttributeInput';
import {useAttributePointsProjection} from './useAttributePointsProjection';

const AttributePointsView: React.FC = () => {
	const attributePoints = useAttributePointsProjection();

	return (
		<div>
			<h3 className='mb-3'>Compra de pontos</h3>
			<div role='status' aria-label='Pontos'>Restante: {attributePoints.getPoints()}</div>
			<div className='flex justify-evenly mb-3'>
				{Object.entries(attributePoints.getAttributes()).map(([key, value]) => {
					const attribute = key as Attribute;
					return (
						<AttributeInput
							key={attribute}
							attribute={attribute}
							value={value}
							decrement={() => {
								attributePoints.decrement(attribute);
							}}
							increment={() => {
								attributePoints.increment(attribute);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AttributePointsView;
