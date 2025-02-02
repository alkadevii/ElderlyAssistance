document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");

    // Display Total Price
    const totalAmount = localStorage.getItem("cartTotal");
    if (totalAmount) {
        const totalDisplay = document.createElement("p");
        totalDisplay.innerHTML = `<strong>Total Payment:</strong> $${totalAmount}`;
        document.querySelector(".payment-container").insertBefore(totalDisplay, paymentForm);
    }

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const cardNumber = document.getElementById("card-number").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!validateCardNumber(cardNumber) || !validateExpiryDate(expiryDate) || !validateCVV(cvv)) {
            alert("Invalid payment details. Please check your card information.");
            return;
        }

        alert("Payment Successful (Simulation). Redirecting...");
        window.location.href = "medshop.html";
    });

    function validateCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber.replace(/\s/g, ""));
    }

    function validateExpiryDate(expiryDate) {
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate);
    }

    function validateCVV(cvv) {
        return /^\d{3,4}$/.test(cvv);
    }
});
