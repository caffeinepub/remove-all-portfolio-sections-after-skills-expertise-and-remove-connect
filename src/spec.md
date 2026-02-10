# Specification

## Summary
**Goal:** End the portfolio page after the Skills & Expertise section by removing all subsequent sections and removing the footer “Connect” area, while keeping navigation and CTAs consistent.

**Planned changes:**
- Update the main page to stop rendering content after the Skills section (remove Gallery and Contact sections from the page).
- Update the site header navigation to remove links to sections that no longer exist (e.g., Gallery, Contact) and keep smooth-scrolling working for remaining links.
- Update hero CTA buttons to remove/replace any actions that scroll to removed section anchors (e.g., `#gallery`, `#contact`).
- Remove the “Connect” heading and its social icon links from the footer and adjust footer layout so it remains balanced.
- Update footer “Quick Links” to remove anchors to removed sections and ensure no links point to non-existent IDs.

**User-visible outcome:** The page ends after Skills & Expertise; header, hero buttons, and footer links no longer reference Gallery/Contact; the footer no longer shows the Connect section and remains clean on mobile and desktop.
