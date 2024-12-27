# odoo-test-uiux
UI/UX designer exercise for Odoo

## UX Report – Variant D

### Usability Issues Found
1. **Tab Navigation**
   - The tabs can’t be fully navigated using just the keyboard (e.g., arrow keys don’t switch tabs).
   - There’s no clear focus style for users who rely on the keyboard.

2. **Low Contrast**
   - Some text, like `text-dark` on a light background, is hard to read, especially for users with visual impairments.
   - Muted text (`text-muted`) in the footer may not stand out enough.

3. **Hover Feedback**
   - On touch devices, hover effects don’t work, so users might miss interactive elements.

4. **ARIA Attributes**
   - ARIA attributes like `aria-selected` and `aria-controls` are added, but they don’t fully work because there’s no dynamic script or Bootstrap logic behind them.

5. **Missing Roles**
   - The card component doesn’t have a `role="region"` or a descriptive label to help screen readers understand its purpose.

6. **Image Alt Text**
   - The placeholder image alt text (`alt="Example Image"`) doesn’t describe the image properly.