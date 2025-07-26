# FloatingNavigation Component

A mobile-first floating navigation bar that appears at the bottom of the screen, providing quick access to the main navigation items.

## Features

- **Sticky Bottom Position**: Fixed at the bottom of the viewport
- **Mobile Optimized**: Only visible on mobile devices (hidden on desktop where BigScreenNavigation is used)
- **Theme Toggle**: Switch between light and dark themes
- **Filter Modal**: Open filters in a modal overlay
- **Accessible**: Proper ARIA labels and keyboard navigation support
- **Touch-Friendly**: 48px minimum touch targets for mobile usability

## Navigation Items

- **Home (Beautify)**: Link to the homepage
- **Theme Toggle**: Switch between light/dark themes
- **Filters**: Opens filter modal for search refinement
- **Partner**: Partner services button
- **Login**: Link to login page

## Usage

```tsx
import FloatingNavigation from "@/components/FloatingNavigation/FloatingNavigation";

function App() {
  return (
    <div>
      {/* Your page content */}
      <FloatingNavigation />
    </div>
  );
}
```

## Props

This component does not accept any props. All state is managed internally or through Redux.

## Dependencies

- Redux store with theme slice
- Modal component for filters
- FilterCard component
- React Icons for navigation icons
- Next.js Link for navigation

## Responsive Behavior

- **Mobile (< 1024px)**: Visible as a floating bottom bar
- **Desktop (≥ 1024px)**: Hidden (BigScreenNavigation is used instead)

## Accessibility

- All buttons have proper ARIA labels
- Focus management for keyboard navigation
- High contrast design with proper color variables
- Touch targets meet mobile accessibility guidelines (48px minimum)

## Styling

The component uses SCSS modules with CSS custom properties for theming. The design follows a mobile-first approach with proper spacing and hover states.
