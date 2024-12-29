# odoo-test-uiux
UI/UX designer exercise for Odoo

## Additional Notes

- Run `npm run build` to create a `dist` package in WinOS. For Mac/Lin, use `npm run build-ml`
- You can find a pre-build for each variant in dist/
- I had add some with the Bootstrap CDN and @import, so I adapted my npm scripts and `_variables.scss` to correctly import the necessary packages. I wanted to avoid using extra packages, so I can showcase my solution-oriented mindset.
- I added only `card-primary` mixin for Var C.
- For Var D, I didn't realize that I should add the adjustments beyond the report itself. This is fixed. I created a basic report using AI to fix the grammar, but I would need better metrics (like conversion rate or user testing scores) to create a good UX report.

---

## UX report (Variant D)

### Usability Issues Found
1. **Tab navigation**
   - The tabs can’t be fully navigated using just the keyboard (e.g., arrow keys don’t switch tabs).
   - There’s no clear focus style for users who rely on the keyboard.

2. **Low contrast**
   - Some text, like `text-dark` on a light background, is hard to read, especially for users with visual impairments.
   - Muted text (`text-muted`) in the footer may not stand out enough.

3. **Hover feedback**
   - On touch devices, hover effects don’t work, so users might miss interactive elements.

4. **ARIA attributes**
   - ARIA attributes like `aria-selected` and `aria-controls` are added, but they don’t fully work because there’s no dynamic script or Bootstrap logic behind them.

5. **Missing roles**
   - The card component doesn’t have a `role="region"` or a descriptive label to help screen readers understand its purpose.

6. **Image alt text**
   - The placeholder image alt text (`alt="Example Image"`) doesn’t describe the image properly.




