import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import PriceRangeSlider from '@/components/PriceRangeSlider/PriceRangeSlider';

describe('PriceRangeSlider', () => {
    test('renders correctly PriceRangeSlider component', () => {
        render(<PriceRangeSlider />);

        const element = screen.getByTestId("priceRangeSlider");
        expect(element).toBeTruthy();
    });
});
