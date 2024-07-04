import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import CustomTimeSlots from '@/components/CustomTimeSlots/CustomTimeSlots';

describe('CustomTimeSlots', () => {
    test('renders correctly CustomTimeSlots component', () => {
        render(<CustomTimeSlots />);

        const element = screen.getByTestId("customTimeSlots");
        expect(element).toBeTruthy();
    });
});
