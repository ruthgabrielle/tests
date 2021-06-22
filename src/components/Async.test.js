import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('Asyc Component', () => {
    test('renders posts if request success', async () => {
        render(<Async /> )

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})