import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Histogram from '@/components/Histogram/Histogram';

describe('Histogram', () => {
    test('renders correctly Histogram component', () => {
        render(<Histogram />);

        const element = screen.getByTestId("histogram");
        expect(element).toBeTruthy();
    });
});
