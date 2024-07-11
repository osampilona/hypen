import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import HamburgerMenuButton from '@/components/HamburgerMenuButton/HamburgerMenuButton';

describe('HamburgerMenuButton', () => {
    test('renders correctly HamburgerMenuButton component', () => {
        render(<HamburgerMenuButton />);

        const element = screen.getByTestId("hamburgerMenuButton");
        expect(element).toBeTruthy();
    });
});
