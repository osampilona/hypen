import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "@/components/Modal/Modal";

// Mock createPortal to render in the same container
vi.mock("react-dom", async () => {
  const actual = await vi.importActual("react-dom");
  return {
    ...actual,
    createPortal: (children: React.ReactNode) => children,
  };
});

describe("Modal", () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset body overflow
    document.body.style.overflow = "unset";
  });

  afterEach(() => {
    // Clean up any remaining event listeners
    document.body.style.overflow = "unset";
  });

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    children: <div>Modal content</div>,
  };

  test("renders modal when isOpen is true", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByTestId("modal")).toBeTruthy();
    expect(screen.getByText("Modal content")).toBeTruthy();
  });

  test("does not render modal when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByTestId("modal")).toBeNull();
  });

  test("renders title when provided", () => {
    render(<Modal {...defaultProps} title="Test Modal" />);

    expect(screen.getByText("Test Modal")).toBeTruthy();
  });

  test("renders close button by default", () => {
    render(<Modal {...defaultProps} title="Test Modal" />);

    expect(screen.getByTestId("modal-close-button")).toBeTruthy();
  });

  test("hides close button when showCloseButton is false", () => {
    render(
      <Modal {...defaultProps} title="Test Modal" showCloseButton={false} />,
    );

    expect(screen.queryByTestId("modal-close-button")).toBeNull();
  });

  test("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} title="Test Modal" />);

    const closeButton = screen.getByTestId("modal-close-button");
    await user.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when Escape key is pressed", () => {
    render(<Modal {...defaultProps} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when Escape key is pressed and closeOnEscape is false", () => {
    render(<Modal {...defaultProps} closeOnEscape={false} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test("calls onClose when backdrop is clicked", async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} />);

    const overlay = screen.getByTestId("modal-overlay");
    await user.click(overlay);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when backdrop is clicked and closeOnBackdropClick is false", async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} closeOnBackdropClick={false} />);

    const overlay = screen.getByTestId("modal-overlay");
    await user.click(overlay);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test("does not call onClose when modal content is clicked", async () => {
    const user = userEvent.setup();
    render(<Modal {...defaultProps} />);

    const modal = screen.getByTestId("modal");
    await user.click(modal);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  test("applies correct size class", () => {
    render(<Modal {...defaultProps} size="large" />);

    const modal = screen.getByTestId("modal");
    expect(modal.className).toContain("large");
  });

  test("applies custom className to overlay", () => {
    render(<Modal {...defaultProps} className="custom-modal" />);

    const overlay = screen.getByTestId("modal-overlay");
    expect(overlay.className).toContain("custom-modal");
  });

  test("applies custom contentClassName to modal content", () => {
    render(<Modal {...defaultProps} contentClassName="custom-content" />);

    const modal = screen.getByTestId("modal");
    expect(modal.className).toContain("custom-content");
  });

  test("sets body overflow to hidden when modal is open", () => {
    render(<Modal {...defaultProps} />);

    expect(document.body.style.overflow).toBe("hidden");
  });

  test("resets body overflow when modal is closed", () => {
    const { rerender } = render(<Modal {...defaultProps} />);

    expect(document.body.style.overflow).toBe("hidden");

    rerender(<Modal {...defaultProps} isOpen={false} />);

    expect(document.body.style.overflow).toBe("unset");
  });

  test("has correct accessibility attributes", () => {
    render(<Modal {...defaultProps} title="Test Modal" />);

    const modal = screen.getByTestId("modal");
    expect(modal.getAttribute("role")).toBe("dialog");
    expect(modal.getAttribute("aria-modal")).toBe("true");
    expect(modal.getAttribute("aria-labelledby")).toBe("modal-title");
  });

  test("focuses on first focusable element when opened", async () => {
    render(
      <Modal {...defaultProps} title="Test Modal">
        <button>First button</button>
        <button>Second button</button>
      </Modal>,
    );

    await waitFor(() => {
      expect(document.activeElement).toBe(screen.getByText("First button"));
    });
  });
});
