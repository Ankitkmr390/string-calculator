import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { add } from './StringCalculator';
describe('App component', () => {
    test('returns 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
    
    test('returns the number for a single number input', () => {
        expect(add("1")).toBe(1);
    });
    
    test('returns the sum for two numbers', () => {
        expect(add("1,5")).toBe(6);
    });
    
    test('handles multiple numbers', () => {
        expect(add("1,2,3,4")).toBe(10);
    });
    
    test('handles new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });
    
    test('supports different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    
    test('throws an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    });
    
    test('throws an error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
    });
    
})
