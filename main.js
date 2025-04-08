// Mobile navigation toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
  // Toggle menu icon between hamburger and close
  const icon = menuBtn.querySelector("i");
  if (navLinks.classList.contains("open")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav__links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    const icon = menuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Set minimum dates for check-in and check-out
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");

if (checkInInput && checkOutInput) {
  checkInInput.min = formatDate(today);
  checkOutInput.min = formatDate(tomorrow);
  
  // Update check-out minimum date when check-in date changes
  checkInInput.addEventListener("change", () => {
    const newMinDate = new Date(checkInInput.value);
    newMinDate.setDate(newMinDate.getDate() + 1);
    checkOutInput.min = formatDate(newMinDate);
    
    // If current check-out date is before new min date, update it
    if (new Date(checkOutInput.value) <= new Date(checkInInput.value)) {
      checkOutInput.value = formatDate(newMinDate);
    }
  });
}

// Initialize ScrollReveal for animations
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
  });

  // Apply animations to elements
  sr.reveal('.header__container', {});
  sr.reveal('.booking__form', { delay: 400 });
  sr.reveal('.about__image', {});
  sr.reveal('.about__content', { delay: 300 });
  sr.reveal('.room__card', { interval: 200 });
  sr.reveal('.amenities__content', {});
  sr.reveal('.banner__card', { interval: 200 });
  sr.reveal('.explore__card', { interval: 200 });
  sr.reveal('.community__image', {});
  sr.reveal('.community__text', { delay: 300 });
  sr.reveal('.footer__col', { interval: 200 });
}

// Form submission handling (placeholder - would connect to backend in production)
const bookingForm = document.querySelector('.booking__form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;
    
    // In a real application, you would send this data to your server
    console.log('Booking request:', { checkIn, checkOut, guests, roomType });
    
    // Show confirmation message (placeholder)
    alert('Thank you for your booking request! We will check availability and contact you shortly.');
  });
}

// Book now buttons - scroll to booking form
document.querySelectorAll('.btn').forEach(button => {
  if (button.textContent.trim() === 'Book Now') {
    button.addEventListener('click', () => {
      const bookingSection = document.querySelector('.booking__container');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});