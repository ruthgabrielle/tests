import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { replaceCamelWithSpaces } from './App'

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
    expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
    render(<App />)

    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();

});

test('when checkbox enable, button should be disabled', () => {
    render(<App />)

    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkBox = screen.getByRole('checkbox', { name: /disable button/i });

    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
})

test('when checkbox disabled button has gray background and reverts to blue', () => {
    render(<App />)

    const colorButton = screen.getByRole('button', { name: /change to blue/i });
    const checkBox = screen.getByRole('checkbox', { name: /disable button/i });

    fireEvent.click(colorButton)

    fireEvent.click(checkBox)
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

    fireEvent.click(checkBox)
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

})

describe('spaces before camel-case capital letters', () => {
    test('Works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red')
    });
    test('Works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')

    });
    test('Works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')

    })
})