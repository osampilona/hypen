import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import TimeSlotsSelector from '@/components/TimeSlotsSelector/TimeSlotsSelector';

describe('TimeSlotsSelector', () => {
    test('renders correctly TimeSlotsSelector component', () => {
        render(<TimeSlotsSelector />);

        const element = screen.getByTestId("timeSlotsSelector");
        expect(element).toBeTruthy();
    });
});
