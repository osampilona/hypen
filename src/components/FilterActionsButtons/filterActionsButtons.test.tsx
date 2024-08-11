import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import FilterActionsButtons from '@/components/FilterActionsButtons/FilterActionsButtons';

describe('FilterActionsButtons', () => {
    test('renders correctly FilterActionsButtons component', () => {
        render(<FilterActionsButtons />);

        const element = screen.getByTestId("filterActionsButtons");
        expect(element).toBeTruthy();
    });
});
