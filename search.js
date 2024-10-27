const menuItems = {
    pizza: [
        { name: "Margherita Pizza", price: "Rs. 249/-", img: "assets/margherita.jpg" },
        { name: "Pepperoni Pizza", price: "Rs. 269/-", img: "assets/pepperonipizza.jpg" },
        { name: "BBQ Chicken Pizza", price: "Rs. 329/-", img: "assets/bbqpizza.avif" },
        { name: "Veggie Pizza", price: "Rs. 199/-", img: "assets/veggie pizza.jpg" },
        { name: "Hawaiian Pizza", price: "Rs. 229/-", img: "assets/hawaiianpizza.jpg" },
        { name: "Four Cheese Pizza", price: "Rs. 319/-", img: "assets/fourpizza.jpg" }
    ],

    momos: [
        { name: "Steam Veg Momos", price: "Rs. 99/-", img: "assets/steammomos.webp" },
        { name: "Fried Chicken Momos", price: "Rs. 199/-", img: "assets/friedmomo.jpg" },
        { name: "Paneer Momos", price: "Rs. 129/-", img: "assets/paneermomo.avif" },
        { name: "Spicy Pork Momos", price: "Rs. 129/-", img: "assets/spicymomo.avif" },
        { name: "Cheese Momos", price: "Rs. 149/-", img: "assets/cheesemomo.jpg" }
    ],

    pasta: [
        { name: "White Cheese pasta", price: "Rs. 149/-", img: "assets/cheesepasta.jpg" },
        { name: "Masala Pasta", price: "Rs. 129/-", img: "assets/masalapasta.jpg" },
        { name: "Red Sauce Pasta", price: "Rs. 99/-", img: "assets/redsausepasta.jpg" },
        { name: "Lasagna Pasta", price: "Rs. 179/-", img: "assets/lasagna pasta.jpg" },
        { name: "Pesto Pasta", price: "Rs. 199/-", img: "assets/pesto pasta.webp" }
    ],

    biryani: [
        { name: "Chicken Biryani", price: "Rs. 199/-", img: "assets/chickenb.jpg" },
        { name: "Veg Biryani", price: "Rs. 149/-", img: "assets/vegb.jpg" },
        { name: "Mutton Biryani", price: "Rs. 289/-", img: "assets/muttonb.jpg" },
        { name: "Hyderabadi Biryani", price: "Rs. 229/-", img: "assets/hydrab.jpg" },
        { name: "Kashmiri Biryani", price: "Rs. 259/-", img: "assets/kashmirib.jpg" }
    ],
    
    burger: [
        { name: "Chicken Burger", price: "Rs. 199/-", img: "assets/chickenburger.avif" },
        { name: "Cheese burger", price: "Rs. 159/-", img: "assets/cheeseburst.webp" },
        { name: "Veggie Burger", price: "Rs. 99/-", img: "assets/vegburger.jpg" },
        { name: "BBQ Bacon Burger", price: "Rs. 189/-", img: "assets/bbqburger.jpg" },
        { name: "Classic Burger", price: "Rs. 129/-", img: "assets/classicburger.png" }
        
    ],

    cappuccino: [
        { name: "Classic Cappuccino", price: "Rs. 199/-", img: "assets/classiccapachino.jpg" },
        { name: "Mocha Cappuccino", price: "Rs. 249/-", img: "assets/Mochacapachino.jpeg" },
        { name: "Vanilla Cappuccino", price: "Rs. 249/-", img: "assets/venillacapechino.jpg" },
        { name: "Caramel Cappuccino", price: "Rs. 299/-", img: "assets/Caremalcapachino.jpg" },
        { name: "Hazelnut Cappuccino", price: "Rs. 299/-", img: "assets/Hazelnut.webp" }
    ],

    mojito: [
        { name: "Mint Mojito", price: "Rs. 99/-", img: "assets/mint mojito.jpg" },
        { name: "Classic Mojito", price: "Rs. 89/-", img: "assets/classic mojito.avif" },
        { name: "Strawberry Mojito", price: "Rs. 129/-", img: "assets/strawberry mojito.jpg" },
        { name: "Mango Mojito", price: "Rs. 149/-", img: "assets/mango mojito.jpg" },
        { name: "Blueberry Mojito", price: "Rs. 149/-", img: "assets/blueberry mojito.jpeg" }
        
    ],

    iceCream: [
        { name: "Vanilla Ice Cream", price: "Rs. 129/-", img: "assets/vanilla.webp" },
        { name: "Chocolate Ice Cream", price: "Rs. 129/-", img: "assets/chocolate.jpg" },
        { name: "Strawberry Ice Cream", price: "Rs. 129/-", img: "assets/strawberry.jpg" },
        { name: "Mango Ice Cream", price: "Rs. 129/-", img: "assets/mango.jpg" },
        { name: "Cookies Ice Cream", price: "Rs. 149/-", img: "assets/cookies.jpg" }
    ]
     
};

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    for (const [key, items] of Object.entries(menuItems)) {
        if (key.includes(query)) {
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                `;
                results.appendChild(itemDiv);
            });
        } else {
            items.forEach(item => {
                if (item.name.toLowerCase().includes(query)) {
                    const itemDiv = document.createElement('div');
                    itemDiv.classList.add('item');
                    itemDiv.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.price}</p>
                    `;
                    results.appendChild(itemDiv);
                }
            });
        }
    }

    if (results.innerHTML === '') {
        results.innerHTML = '<p>No results found.</p>';
    }
});

function displayItems(items) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;
        results.appendChild(itemDiv);
    });
}

// Initial load to display all items
window.onload = () => {
    let allItems = [];
    Object.values(menuItems).forEach(category => allItems = [...allItems, ...category]);
    displayItems(allItems);
};

// Search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    let filteredItems = [];

    // Filter items based on category or item name
    for (const items of Object.values(menuItems)) {
        items.forEach(item => {
            if (item.name.toLowerCase().includes(query) || query === '') {
                filteredItems.push(item);
            }
        });
    }

    displayItems(filteredItems);

    if (filteredItems.length === 0) {
        results.innerHTML = '<p>No results found.</p>';
    }
});