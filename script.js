// Booking form handler
    document.getElementById("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.name.value;
      const address = this.address.value;
      const service = this.service.value;
      const date = this.date.value;

      document.getElementById("sumName").innerText = name;
      document.getElementById("sumAddress").innerText = address;
      document.getElementById("sumService").innerText = service;
      document.getElementById("sumDate").innerText = date;
      document.getElementById("orderSummary").style.display = "block";

      // Submit the form after showing the summary
      setTimeout(() => this.submit(), 500);
    });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
