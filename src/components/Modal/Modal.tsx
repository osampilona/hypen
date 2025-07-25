"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import modal from "@/components/Modal/modal.module.scss";

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Modal size */
  size?: "small" | "medium" | "large" | "fullscreen";
  /** Whether the modal can be closed by clicking the backdrop */
  closeOnBackdropClick?: boolean;
  /** Whether the modal can be closed by pressing Escape */
  closeOnEscape?: boolean;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Custom className for the modal */
  className?: string;
  /** Custom className for the modal content */
  contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  contentClassName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === modalRef.current) {
      onClose();
    }
  };

  // Focus management
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const focusableElements = contentRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstFocusable = focusableElements[0] as HTMLElement;

      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      ref={modalRef}
      className={`${modal.overlay} ${className || ""}`}
      onClick={handleBackdropClick}
      data-testid="modal-overlay"
    >
      <div
        ref={contentRef}
        className={`${modal.container} ${modal[size]} ${contentClassName || ""}`}
        data-testid="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || showCloseButton) && (
          <div className={modal.header}>
            {title && (
              <h2 id="modal-title" className={modal.title}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className={modal.closeButton}
                onClick={onClose}
                aria-label="Close modal"
                data-testid="modal-close-button"
              >
                <IoMdClose />
              </button>
            )}
          </div>
        )}
        <div className={modal.content}>{children}</div>
      </div>
    </div>
  );

  // Use portal to render modal at the root level
  return createPortal(modalContent, document.body);
};

export default Modal;
