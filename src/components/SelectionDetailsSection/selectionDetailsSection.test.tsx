import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import SelectionDetailsSection from '@/components/SelectionDetailsSection/SelectionDetailsSection';

describe('SelectionDetailsSection', () => {
    test('renders correctly SelectionDetailsSection component', () => {
        render(<SelectionDetailsSection />);

        const element = screen.getByTestId("selectionDetailsSection");
        expect(element).toBeTruthy();
    });
});
