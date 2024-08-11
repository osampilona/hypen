import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import AccordionList from '@/components/AccordionList/AccordionList';

describe('AccordionList', () => {
    test('renders correctly AccordionList component', () => {
        render(<AccordionList />);

        const element = screen.getByTestId("accordionList");
        expect(element).toBeTruthy();
    });
});
