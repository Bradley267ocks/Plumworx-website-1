// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.innerHTML = navMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active', 'prev'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Set previous slide for animation
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[prevSlide].classList.add('prev');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Initialize Google Map
function initMap() {
    // Langebaan coordinates: -33.0989, 18.0332
    const langebaan = { lat: -33.0989, lng: 18.0332 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: langebaan,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#444444"}
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {"visibility": "off"}
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {"saturation": -100},
                    {"lightness": 45}
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {"visibility": "simplified"}
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {"visibility": "off"}
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {"visibility": "off"}
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {"color": "#0077B6"},
                    {"visibility": "on"}
                ]
            }
        ]
    });
    
    new google.maps.Marker({
        position: langebaan,
        map: map,
        title: 'Plumbworx Plumbing Services',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });
}

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the data to your server
    // For this example, we'll just show a success message
    alert(`Thank you ${name}! Your message has been sent. We'll contact you at ${phone} shortly.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});