// // Sample cart data (this would be dynamically populated)
// const cartItems = [
//     { name: 'Momos', quantity: 1, price: 99 },
//     { name: 'Pasta', quantity: 1, price: 199 },
//     { name: 'Hydrabadi Biryani', quantity: 2, price: 249 },
//     { name: 'Ice Cream', quantity: 1, price: 199 },
// ];

// // Function to display the cart items on the page
// function displayCartItems() {
//     const cartBody = document.getElementById('cart-body');
//     let subtotal = 0;

//     cartItems.forEach(item => {
//         const total = item.quantity * item.price;
//         subtotal += total;

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${item.name}</td>
//             <td>${item.quantity}</td>
//             <td>${item.price}</td>
//             <td>${total}</td>
//         `;
//         cartBody.appendChild(row);
//     });

//     document.getElementById('subtotal').textContent = subtotal.toFixed(2);
// }

// // Function to handle the order process
// document.getElementById('order-btn').addEventListener('click', function () {
//     alert('Order placed successfully! Generating your bill...');
    
//     // Display the bill section
//     document.getElementById('print-section').classList.remove('hidden');
    
//     // Populate the bill section
//     const billItems = document.getElementById('bill-items');
//     let totalBill = 0;

//     cartItems.forEach(item => {
//         const total = item.quantity * item.price;
//         totalBill += total;

//         const billRow = document.createElement('p');
//         billRow.textContent = `${item.name} (${item.quantity}) - ₹${total}`;
//         billItems.appendChild(billRow);
//     });

//     document.getElementById('total-bill').textContent = totalBill.toFixed(2);
// });

// // Function to print the bill
// function printBill() {
//     window.print();
// }
// // window.location.href = "index.html";
// // Initialize the cart display on page load
// document.addEventListener('DOMContentLoaded', displayCartItems);

// Sample cart data (this would be dynamically populated)
const cartItems = [
    { name: 'Momos', quantity: 1, price: 99 },
    { name: 'Pasta', quantity: 1, price: 199 },
    { name: 'Hydrabadi Biryani', quantity: 2, price: 249 },
    { name: 'Ice Cream', quantity: 1, price: 199 },
];

// Function to display the cart items on the page
function displayCartItems() {
    const cartBody = document.getElementById('cart-body');
    let subtotal = 0;

    cartItems.forEach(item => {
        const total = item.quantity * item.price;
        subtotal += total;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${total}</td>
        `;
        cartBody.appendChild(row);
    });

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
}

// Function to handle the order process
document.getElementById('order-btn').addEventListener('click', function () {
    alert('Order placed successfully! Generating your bill...');

    // Display the bill section
    document.getElementById('print-section').classList.remove('hidden');

    // Populate the bill section
    const billItems = document.getElementById('bill-items');
    let totalBill = 0;

    cartItems.forEach(item => {
        const total = item.quantity * item.price;
        totalBill += total;

        const billRow = document.createElement('p');
        billRow.textContent = `${item.name} (${item.quantity}) - ₹${total}`;
        billItems.appendChild(billRow);
    });

    document.getElementById('total-bill').textContent = totalBill.toFixed(2);
});

// Function to print the bill and display Thank You message
function printBill() {
    window.print();
    
    // After printing, display the Thank You message and redirect to index.html
    setTimeout(() => {
        alert('Thank you for your order!');
        window.location.href = "index.html"; // Redirecting back to index.html
    }, 1000); // Wait 1 second after print before redirecting
}

// Initialize the cart display on page load
document.addEventListener('DOMContentLoaded', displayCartItems);

// Attach the print function to the print button
document.getElementById('print-btn').addEventListener('click', printBill);
