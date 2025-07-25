# Modal Component

A flexible and accessible modal component with support for different sizes, custom styling and comprehensive keyboard navigation.

## Features

- ✅ **Portal-based rendering** - Renders outside the normal DOM hierarchy
- ✅ **Accessible** - Proper ARIA attributes and focus management
- ✅ **Responsive** - Works well on all screen sizes
- ✅ **Customizable** - Multiple sizes, custom classes, and flexible content
- ✅ **Keyboard navigation** - Escape key support and focus trapping
- ✅ **Backdrop interaction** - Optional click-outside-to-close
- ✅ **Dark mode ready** - Supports system color scheme preferences
- ✅ **Smooth animations** - Fade in/out and slide animations

## Basic Usage

```tsx
import { useState } from "react";
import Modal from "@/components/Modal/Modal";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
      >
        <p>This is the modal content!</p>
      </Modal>
    </div>
  );
}
```

## Props

| Prop                   | Type                                             | Default    | Description                                           |
| ---------------------- | ------------------------------------------------ | ---------- | ----------------------------------------------------- |
| `isOpen`               | `boolean`                                        | -          | **Required.** Whether the modal is visible            |
| `onClose`              | `() => void`                                     | -          | **Required.** Function called when modal should close |
| `children`             | `React.ReactNode`                                | -          | **Required.** Modal content                           |
| `title`                | `string`                                         | -          | Modal title displayed in header                       |
| `size`                 | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Modal size                                            |
| `closeOnBackdropClick` | `boolean`                                        | `true`     | Whether clicking backdrop closes modal                |
| `closeOnEscape`        | `boolean`                                        | `true`     | Whether Escape key closes modal                       |
| `showCloseButton`      | `boolean`                                        | `true`     | Whether to show X button in header                    |
| `className`            | `string`                                         | -          | Custom class for modal overlay                        |
| `contentClassName`     | `string`                                         | -          | Custom class for modal content                        |

## Examples

### Different Sizes

```tsx
// Small modal
<Modal size="small" isOpen={isOpen} onClose={onClose}>
  <p>Small modal content</p>
</Modal>

// Large modal
<Modal size="large" isOpen={isOpen} onClose={onClose}>
  <p>Large modal content</p>
</Modal>

// Fullscreen modal
<Modal size="fullscreen" isOpen={isOpen} onClose={onClose}>
  <p>Fullscreen modal content</p>
</Modal>
```

### Form Modal

```tsx
<Modal
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
  title="Contact Form"
  size="medium"
>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required />
    </div>
    <div>
      <label htmlFor="message">Message:</label>
      <textarea id="message" required />
    </div>
    <button type="submit">Send</button>
  </form>
</Modal>
```

### Confirmation Modal

```tsx
<Modal
  isOpen={isConfirmOpen}
  onClose={() => setIsConfirmOpen(false)}
  title="Confirm Action"
  size="small"
  closeOnBackdropClick={false}
>
  <p>Are you sure you want to delete this item?</p>
  <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
    <button onClick={() => setIsConfirmOpen(false)}>Cancel</button>
    <button
      onClick={handleDelete}
      style={{ backgroundColor: "#ff4568", color: "white" }}
    >
      Delete
    </button>
  </div>
</Modal>
```

### Custom Styled Modal

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  className="my-custom-overlay"
  contentClassName="my-custom-modal"
>
  <h2>Custom Styled Modal</h2>
  <p>This modal has custom styling applied.</p>
</Modal>
```

## Accessibility

The modal component follows accessibility best practices:

- **Focus Management**: Automatically focuses the first focusable element when opened
- **Keyboard Navigation**: Escape key closes the modal (when enabled)
- **ARIA Attributes**: Proper `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`
- **Body Scroll Lock**: Prevents background scrolling when modal is open
- **Screen Reader Support**: Properly announced to screen readers

## Styling

The modal uses CSS modules with the following class structure:

```scss
.overlay         // Modal backdrop
.container       // Modal content container
.header          // Modal header (title + close button)
.title           // Modal title
.closeButton     // Close button
.content         // Modal body content
.small           // Small size modifier
.medium          // Medium size modifier
.large           // Large size modifier
.fullscreen      // Fullscreen size modifier
```

You can override styles by:

1. Using the `className` prop for overlay styling
2. Using the `contentClassName` prop for modal content styling
3. Creating custom CSS that targets the modal classes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled for functionality
