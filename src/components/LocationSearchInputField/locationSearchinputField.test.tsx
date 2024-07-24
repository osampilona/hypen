import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import LocationSearchinputField from '@/components/LocationSearchinputField/LocationSearchinputField';

describe('LocationSearchinputField', () => {
    test('renders correctly LocationSearchinputField component', () => {
        render(<LocationSearchinputField />);

        const element = screen.getByTestId("locationSearchinputField");
        expect(element).toBeTruthy();
    });
});
