import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import CustomInputField from '@/components/CustomInputField/CustomInputField';

describe('CustomInputField', () => {
    test('renders correctly CustomInputField component', () => {
        render(<CustomInputField />);

        const element = screen.getByTestId("customInputField");
        expect(element).toBeTruthy();
    });
});
