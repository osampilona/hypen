import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import InputField from '@/components/InputField/InputField';

describe('InputField', () => {
    test('renders correctly InputField component', () => {
        render(<InputField />);

        const element = screen.getByTestId("inputField");
        expect(element).toBeTruthy();
    });
});
