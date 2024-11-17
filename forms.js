




// Function to validate a field for empty input
function validateField(fieldId, message) {
    const field = document.getElementById(fieldId); // Select field by ID
    const errorSpan = document.createElement("span"); // Create error span
    errorSpan.className = "form-error"; // Add error styling class
    field.parentNode.appendChild(errorSpan); // Place error next to input





// Form submission handling
document.querySelector(".contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form submission if invalid
  
    const fields = ["name", "email", "phone", "message"];
    let formIsValid = true;
  
    // Check each field for validity
    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.value.trim() === "") {
        formIsValid = false;
        validateField(fieldId, `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required.`);
      }
    });
      // If all fields are valid, show confirmation
  if (formIsValid) {
    alert("Thank you for contacting us!");
    // this.submit(); // Uncomment to allow submission
  }
});

// Start validation setup
setupValidation();