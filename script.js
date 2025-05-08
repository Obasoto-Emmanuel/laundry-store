// Booking form handler
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your booking has been submitted!");
  this.reset();
});

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});
