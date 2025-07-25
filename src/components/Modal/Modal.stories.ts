import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/Modal/Modal";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  contentClassName?: string;
}

const meta: Meta<typeof Modal> = {
  title: "Atomic components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "fullscreen"],
    },
    closeOnBackdropClick: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    showCloseButton: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<IModalProps>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Default Modal",
    size: "medium",
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    children: "This is the modal content!",
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Small Modal",
    size: "small",
    children: "This is a small modal.",
  },
};

export const Medium: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Medium Modal",
    size: "medium",
    children: "This is a medium modal.",
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Large Modal",
    size: "large",
    children: "This is a large modal.",
  },
};

export const Fullscreen: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Fullscreen Modal",
    size: "fullscreen",
    children: "This is a fullscreen modal.",
  },
};

export const WithoutTitle: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    size: "medium",
    children: "This modal has no title.",
  },
};

export const NoCloseButton: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Modal without Close Button",
    size: "medium",
    showCloseButton: false,
    children: "This modal doesn't show the close button.",
  },
};
