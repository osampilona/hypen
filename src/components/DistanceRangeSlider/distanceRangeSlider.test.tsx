import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import DistanceRangeSlider from '@/components/DistanceRangeSlider/DistanceRangeSlider';

describe('DistanceRangeSlider', () => {
    test('renders correctly DistanceRangeSlider component', () => {
        render(<DistanceRangeSlider />);

        const element = screen.getByTestId("distanceRangeSlider");
        expect(element).toBeTruthy();
    });
});
