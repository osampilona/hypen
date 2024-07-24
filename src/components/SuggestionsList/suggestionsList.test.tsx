import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import SuggestionsList from '@/components/SuggestionsList/SuggestionsList';

describe('SuggestionsList', () => {
    test('renders correctly SuggestionsList component', () => {
        render(<SuggestionsList />);

        const element = screen.getByTestId("suggestionsList");
        expect(element).toBeTruthy();
    });
});
