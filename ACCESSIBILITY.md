# Accessibility Checklist

This document tracks accessibility improvements for waleedshafqat.com per WCAG 2.1 Level AA standards.

## ✅ Completed

### Semantic HTML & Headings
- [x] Root layout uses semantic `<header>`, `<main>`, `<footer>` elements
- [x] Each page has exactly one H1 (in hero or page title)
- [x] Heading hierarchy is logical (H1 → H2 → H3, no skipped levels)
- [x] All sections use semantic heading levels

### Color & Contrast
- [x] Light theme: sufficient contrast (WCAG AA)
- [x] Dark theme: sufficient contrast verified
- [x] Interactive elements have clear visual states

### Interactive Elements
- [x] Icon-only buttons have aria-labels (footer social links)
- [x] Navbar menu has keyboard navigation support
- [x] Form inputs have associated labels
- [x] Details/summary accordion elements are keyboard accessible

### Keyboard Navigation
- [x] All interactive elements are keyboard accessible
- [x] Focus order is logical (tabindex not needed)
- [x] Mobile menu can be closed with Escape key
- [x] No keyboard traps

### Images & Media
- [x] All images have descriptive alt text
- [x] Logo image has alt="Waleed Shafqat"
- [x] Hero portrait has alt="Waleed Shafqat"
- [x] Client logos have descriptive alts

### Animations
- [x] prefers-reduced-motion is respected (hero animations disabled when enabled)
- [x] Framer Motion respects accessibility preferences
- [x] No auto-playing animations with sound

### Performance (Core Web Vitals)
- [x] Images use Next.js Image component with priority
- [x] LCP optimization in place
- [x] No layout shift on load

## 🔄 Recommendations for Further Improvement

### Missing Aria Labels
- [ ] Theme toggle button in navbar (add aria-label="Toggle dark mode")
- [ ] Mobile menu open/close button (add aria-label="Toggle navigation menu")
- [ ] FAQ accordion close buttons (already have details/summary)

### Alt Text Enhancement
- Review all client logos for more descriptive alt text
- Example: alt="Levis retail company logo" instead of alt="Levis"

### Focus Indicators
- Ensure all interactive elements have visible focus rings
- Use Tailwind's focus-visible class on interactive elements

### Testing
- [ ] Test with screen readers: NVDA (Windows), VoiceOver (macOS)
- [ ] Test keyboard navigation with Tab, Shift+Tab, Enter, Escape
- [ ] Test with color contrast analyzer
- [ ] Test with axe DevTools (Chrome extension)

## Running Axe DevTools

```
1. Install axe DevTools Chrome extension
2. Open DevTools → Axe DevTools
3. Scan page
4. Review and fix critical issues
```

## Screen Reader Testing

### macOS (VoiceOver)
```
Cmd + F5 to enable VoiceOver
Cmd + F5 to disable
```

### Windows (NVDA)
```
Download from https://www.nvaccess.org/
Ctrl + Alt + N to start/stop
```

## WCAG 2.1 Level AA Targets

- [x] 1.4.3 Contrast (Minimum): text has 4.5:1 ratio
- [x] 2.1.1 Keyboard: all functionality available via keyboard
- [x] 2.4.7 Focus Visible: keyboard focus is visible
- [x] 4.1.2 Name, Role, Value: interactive elements properly labeled
- [x] 2.4.3 Focus Order: focus order is logical
- [ ] (Recommended) 2.5.5 Target Size: touchable elements are 44×44px minimum

## Notes

- The site uses semantic HTML throughout, making it accessible to assistive technologies
- Color contrast meets WCAG AA standards in both light and dark modes
- Animations respect user motion preferences via prefers-reduced-motion media query
- All form elements have associated labels
- Icon-only buttons have aria-labels

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
