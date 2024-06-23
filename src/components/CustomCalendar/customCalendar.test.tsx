import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import CustomCalendar from '@/components/CustomCalendar/CustomCalendar';

describe('CustomCalendar', () => {
    test('renders correctly CustomCalendar component', () => {
        render(<CustomCalendar />);

        const element = screen.getByTestId("customCalendar");
        expect(element).toBeTruthy();
    });
});
