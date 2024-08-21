import React from 'react';
import { act, render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { add } from './component/StringCalculator';

// Mock the add function to test the component in isolation
jest.mock('./component/StringCalculator');

describe('App component', () => {
    beforeEach(() => {
        add.mockClear();
    });

    test('calculates the sum when valid input is provided', () => {
        // Mock the add function to return a specific value
        add.mockReturnValue(6);

        render(<App />);

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('Enter numbers'), {
            target: { value: '1,2,3' },
        });

        // Simulate button click
        fireEvent.click(screen.getByText('Calculate'));

        // Assert that the result is displayed correctly
        expect(screen.getByText('Result: 6')).toBeInTheDocument();
        expect(screen.queryByText('Error:')).not.toBeInTheDocument();
    });

    test('displays an error when invalid input is provided', () => {
        // Mock the add function to throw an error
        add.mockImplementation(() => {
            throw new Error('Invalid input');
        });

        render(<App />);

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('Enter numbers'), {
            target: { value: 'invalid-input' },
        });

        // Simulate button click
        fireEvent.click(screen.getByText('Calculate'));

        // Assert that the error message is displayed
        expect(screen.getByText('Error: Invalid input')).toBeInTheDocument();
        expect(screen.queryByText('Result:')).not.toBeInTheDocument();
    });
});
