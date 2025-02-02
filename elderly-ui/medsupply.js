document.addEventListener("DOMContentLoaded", function () {
    const cartItems = [];
    const cartList = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            cartItems.push({ name, price });

            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalPriceEl.textContent = total.toFixed(2);
    }

    // Redirect to Payment Page
    checkoutBtn.addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            localStorage.setItem("cartTotal", totalPriceEl.textContent);
            window.location.href = "payment.html";
        }
    });
});
