//showing navbar when click menu on mobile view
const mobile=document.querySelector('menu-toggle');
const mobileLink=document.querySelector('sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu when you click on
mobileLink.addEventListener("click",  function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

//move the menu to right and left when you click back and next
var step=100;
var stepFilter=60;
var scrolling=true;

$(".back").bind("click",function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

//when click back and next on menu filters
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".fliter-wrapper").animate({
        scrollLeft: "-=" + stepFilter  + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".fliter-wrapper").animate({
        scrollLeft: "+=" + stepFilter  + "px"
    });
});

//for shoping cart part//
//for cart popup
function toogleCartPopup(){
    const cartPopup=document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');
}

//for close cart popup 
function closeCart(){
const cartPopup=document.getElementById('cart-popup');
cartPopup.classList.remove('active');
}
//for add to cart button 
function addToCart(itemName,itemPrice){
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent ===itemName);
    if(existingItem){
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) +1;
        existingItem.querySelector('.item-count').textContent = itemCount;
        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);

    }
    else {
        const newRow = cartItems.insertRow();
        newRow.innerHTML =`
        <td>${itemName}</td>
        <td class='item-count'>1</td>
        <td class='item-price'>${itemPrice}</td>
        <td class='item-total'>${itemPrice}</td>
         `;
        
    }
    updateCartCountAndTotal();

}
//update cart count and total
function updateCartCountAndTotal(){
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let totalCount = 0;
    let total = 0;
    cartItems.forEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        totalCount +=itemCount;
        total+= itemTotal;
    });
    cartCount.textContent = totalCount;
    cartTotal.textContent = total.toFixed(2);
    
}



  

// Order Now button click event with data transfer
function orderBtn() {
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    const orderDetails = Array.from(cartItems).map(item => ({
        name: item.cells[0].textContent,
        quantity: item.querySelector('.item-count').textContent,
        price: item.querySelector('.item-price').textContent,
        total: item.querySelector('.item-total').textContent
    }));
    const totalCost = document.getElementById('cart-total').textContent;

    // Store order data in localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    localStorage.setItem('totalCost', totalCost);

    // Redirect to order page
    window.location.href = "order5.html";
}



