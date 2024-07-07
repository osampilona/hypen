import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import BigScreenNavigation from '@/components/BigScreenNavigation/BigScreenNavigation';

describe('BigScreenNavigation', () => {
    test('renders correctly BigScreenNavigation component', () => {
        render(<BigScreenNavigation />);

        const element = screen.getByTestId("bigScreenNavigation");
        expect(element).toBeTruthy();
    });
});
