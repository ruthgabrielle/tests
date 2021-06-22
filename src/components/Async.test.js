import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('Asyc Component', () => {
    test('renders posts if request success', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'post'}]
        });

        render(<Async /> )

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})