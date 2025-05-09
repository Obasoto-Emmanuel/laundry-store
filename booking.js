// Initialize EmailJS with your public key
(function () {
  emailjs.init("O2Zqfoem_GxQ1Kc6Q");
})();

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_p6zj4fg", "template_txxi66q", this).then(
    function (response) {
      console.log("SUCCESS!", response);
      alert("Your booking has been submitted successfully!");

      // Open a new window for printing with captured form data
      const formData = new FormData(document.getElementById("bookingForm"));
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`
        <html><head><title>Booking Details</title></head><body>
          <h1>Booking Confirmation</h1>
          <p><strong>Name:</strong> ${formData.get("name")}</p>
          <p><strong>Address:</strong> ${formData.get("address")}</p>
          <p><strong>Service:</strong> ${formData.get("service")}</p>
          <p><strong>Date:</strong> ${formData.get("date")}</p>
          <button onclick="window.print()">Print</button>
        </body></html>
      `);
      printWindow.document.close();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("There was an issue submitting your booking. Please try again.");
    }
  );

  this.reset();
});

// Toggle mobile navigation
document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});
