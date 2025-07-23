import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';

describe('PhotoGrid', () => {
    test('renders correctly PhotoGrid component', () => {
        render(<PhotoGrid />);

        const element = screen.getByTestId("photoGrid");
        expect(element).toBeTruthy();
    });
});
