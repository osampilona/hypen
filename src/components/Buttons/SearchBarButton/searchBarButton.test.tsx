import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import SearchBarButton from '@/components/SearchBarButton/SearchBarButton';

describe('SearchBarButton', () => {
    test('renders correctly SearchBarButton component', () => {
        render(<SearchBarButton />);

        const element = screen.getByTestId("searchBarButton");
        expect(element).toBeTruthy();
    });
});
