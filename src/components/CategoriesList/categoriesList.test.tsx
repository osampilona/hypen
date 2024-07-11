import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import CategoriesList from '@/components/CategoriesList/CategoriesList';

describe('CategoriesList', () => {
    test('renders correctly CategoriesList component', () => {
        render(<CategoriesList />);

        const element = screen.getByTestId("categoriesList");
        expect(element).toBeTruthy();
    });
});
