import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import FilterCard from '@/components/FilterCard/FilterCard';

describe('FilterCard', () => {
    test('renders correctly FilterCard component', () => {
        render(<FilterCard />);

        const element = screen.getByTestId("filterCard");
        expect(element).toBeTruthy();
    });
});
