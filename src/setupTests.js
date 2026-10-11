import '@testing-library/jest-dom';

// jsdom lacks these browser APIs used by the theme and scroll-reveal logic.
window.matchMedia = window.matchMedia || ((query) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }));
window.IntersectionObserver = window.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} };
