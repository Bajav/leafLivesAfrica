gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.to('.navbar', {
    y: 0,
    duration: 1,
    ease: 'power4.out'
});

// Hero section animations
gsap.to('.hero h1', {
    opacity: 1,
    duration: 1,
    delay: 0.5,
    y: 30,
    ease: 'power4.out'
});

gsap.to('.hero p', {
    opacity: 1,
    duration: 1,
    delay: 0.8,
    y: 30,
    ease: 'power4.out',
    stagger: 0.2
});

// Mission cards animations
gsap.to('.card', {
    scrollTrigger: {
        trigger: '.mission-cards',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power4.out'
});

// About section animations
gsap.to('.about h2, .about p', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 30,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
});
gsap.to('.project', {
    scrollTrigger: {
        trigger: '.project',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
});