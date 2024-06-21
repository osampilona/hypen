import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Overlay from '@/components/Overlay/Overlay';

describe('Overlay', () => {
    test('renders correctly Overlay component', () => {
        render(<Overlay />);

        const element = screen.getByTestId("overlay");
        expect(element).toBeTruthy();
    });
});
