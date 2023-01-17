import React from 'react';
import AttributePointsView from './AttributePointsView';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('AttributePoints', () => {
	it('should render initial points', () => {
		const screen = render(<AttributePointsView />);
		expect(screen.getByRole('status', {name: 'Pontos'})).toHaveTextContent('10');
	});

	it('should render initial attributes', () => {
		const screen = render(<AttributePointsView />);
		expect(screen.getByLabelText('Força')).toHaveValue(0);
		expect(screen.getByLabelText('Destreza')).toHaveValue(0);
		expect(screen.getByLabelText('Constituição')).toHaveValue(0);
		expect(screen.getByLabelText('Inteligência')).toHaveValue(0);
		expect(screen.getByLabelText('Sabedoria')).toHaveValue(0);
		expect(screen.getByLabelText('Carisma')).toHaveValue(0);
	});

	it('should increment strength and decrement points', async () => {
		const user = userEvent.setup();
		const screen = render(<AttributePointsView />);
		const button = screen.getByRole('button', {name: 'Aumentar Força'});
		await user.click(button);

		expect(screen.getByLabelText('Força')).toHaveValue(1);
		expect(screen.getByRole('status', {name: 'Pontos'})).toHaveTextContent('9');
	});

	it('should decrement charisma and increment points', async () => {
		const user = userEvent.setup();
		const screen = render(<AttributePointsView />);
		const button = screen.getByRole('button', {name: 'Diminuir Carisma'});
		await user.click(button);

		expect(screen.getByLabelText('Carisma')).toHaveValue(-1);
		expect(screen.getByRole('status', {name: 'Pontos'})).toHaveTextContent('11');
	});
});
