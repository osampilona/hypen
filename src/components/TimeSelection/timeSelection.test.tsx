import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import TimeSelection from '@/components/TimeSelection/TimeSelection';

describe('TimeSelection', () => {
    test('renders correctly TimeSelection component', () => {
        render(<TimeSelection />);

        const element = screen.getByTestId("timeSelection");
        expect(element).toBeTruthy();
    });
});
