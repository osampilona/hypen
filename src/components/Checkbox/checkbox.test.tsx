import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Checkbox from '@/components/Checkbox/Checkbox';

describe('Checkbox', () => {
    test('renders correctly Checkbox component', () => {
        render(<Checkbox />);

        const element = screen.getByTestId("checkbox");
        expect(element).toBeTruthy();
    });
});
