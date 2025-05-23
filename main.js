let navMenuIcon = document.querySelector("header .hamburger-menu");
let navMenu = document.querySelector("header .topnav")

navMenuIcon.onclick = function () {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Card hover effect enhancement
    const cards = document.querySelectorAll('.third .card');

    cards.forEach(card => {
        // Add click event to each card
        card.addEventListener('click', function () {
            // You can add navigation logic here
            console.log('Card clicked:', this.querySelector('.sentence1').textContent);
        });

        // Enhanced hover effect
        card.addEventListener('mouseenter', function () {
            this.querySelector('.details').style.background = 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)';
        });

        card.addEventListener('mouseleave', function () {
            this.querySelector('.details').style.background = 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)';
        });
    });

    // "More Work" button functionality
    const moreButton = document.querySelector('.third .more');
    if (moreButton) {
        moreButton.addEventListener('click', function () {
            // You can add your "load more" functionality here
            alert('More work button clicked!');
            // Example: Load more cards dynamically
            // loadMoreCards();
        });
    }

    // Optional: Lazy load images
    if ('IntersectionObserver' in window) {
        const lazyCards = document.querySelectorAll('.third .card');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.style.opacity = 1;
                    cardObserver.unobserve(card);
                }
            });
        }, { threshold: 0.1 });

        lazyCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transition = 'opacity 0.5s ease';
            cardObserver.observe(card);
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Team member card interactions
    const teamCards = document.querySelectorAll('.fourth .card');

    teamCards.forEach(card => {
        // Click event for each team member card
        card.addEventListener('click', function (e) {
            // Don't trigger if clicking on social links
            if (!e.target.closest('.links')) {
                const name = this.querySelector('.name').textContent;
                console.log(`Viewing profile of ${name}`);
                // You could add modal popup functionality here
            }
        });

        // Touch device support
        card.addEventListener('touchend', function (e) {
            if (!e.target.closest('.links')) {
                this.classList.toggle('active');
            }
        });
    });

    // Social media link handling
    const socialLinks = document.querySelectorAll('.fourth .links img');
    socialLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.stopPropagation();
            const platform = this.src.includes('twitter') ? 'Twitter' :
                this.src.includes('facebook') ? 'Facebook' :
                    this.src.includes('instagram') ? 'Instagram' :
                        this.src.includes('linkedin') ? 'LinkedIn' : 'Social';
            console.log(`Opening ${platform} profile`);
            // Add actual link navigation here
        });
    });

    // Optional: Animate cards on scroll
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        teamCards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }
});