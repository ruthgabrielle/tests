import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('button has correct initial color', () => {
    render(<App />)

    //role of button and text
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });

    // expect the background color to be red 
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

    //click button
    fireEvent.click(colorButton);

    //expect color button blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    //expect the button to be 'Change to red'
    expect(colorButton.textContent).toBe('Change to red');
});

