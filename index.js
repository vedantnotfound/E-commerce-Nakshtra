// Checking JS file

console.log("Welcome To Nakshtra Book Depo");

let navbar = document.getElementById("navbar");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 5) {
        navbar.style.transform = "translateY(-65px)";
    } else {
        // navbar.style.top = "auto";
        navbar.style.transform = "translateY(0px)";
    }
};

window.addEventListener("scroll", myScrollFunc);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//* Menu

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function () {
    let menu = document.getElementById("menu");
    menu.style.transform = "translateX(0px)";
})

let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function () {
    let menu = document.getElementById("menu");
    menu.style.transform = "translateX(-320px)";
})

// * Cart
let cartBtn = document.getElementById("cartBtn");
cartBtn.addEventListener("click", function () {
    let cart = document.getElementById("cart");
    cart.style.transform = "translateX(0px)";

})
let cartCloseBtn = document.getElementById("cartCloseBtn");
cartCloseBtn.addEventListener("click", function () {
    let cart = document.getElementById("cart");
    cart.style.transform = "translateX(570px)";
})

// bottomSearch
let bottomSearchTab = document.getElementById("bottomSearchTab");
bottomSearchTab.addEventListener("click", function () {
    let searchBlackScreen = document.getElementById("searchBlackScreen");
    let bottomSearch = document.getElementById("bottomSearch");
    bottomSearch.style.transform = "translateY(0)",
        searchBlackScreen.style.display = "block";
})

let closeSearchBar = document.getElementById("closeSearchBar");
closeSearchBar.addEventListener("click", function () {
    let searchBlackScreen = document.getElementById("searchBlackScreen");
    let bottomSearch = document.getElementById("bottomSearch");
    bottomSearch.style.transform = "translateY(600px)",
        searchBlackScreen.style.display = "none";
})


// document.addEventListener('DOMContentLoaded', function () {
//     var searchInput = document.getElementById('searchInput');
//     var searchBtn = document.getElementById('searchBtn');

//     searchBtn.addEventListener('click', function () {
//         var searchTerm = searchInput.value.toLowerCase();

//         // Get all tool cards
//         var toolCards = document.getElementsByClassName('cardx');

//         // Loop through each card and check if it contains the search term
//         for (var i = 0; i < toolCards.length; i++) {
//             var card = toolCards[i];
//             var cardText = card.innerText.toLowerCase();

//             // If the card text contains the search term, display the card, otherwise hide it
//             if (cardText.includes(searchTerm)) {


//                 card.style.display = 'flex';

//             } else {

//                 card.style.display = 'none';

//             }

//         }

//     });
// });

document.getElementById('searchInput').addEventListener('input', function () {
    let searchValue = this.value.toLowerCase();
    let characterCards = document.getElementsByClassName('cardx');

    for (let card of characterCards) {
        let cardText = card.textContent.toLowerCase();
        if (cardText.includes(searchValue)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const addToCartButtons = document.querySelectorAll('.cardx');
//     const cartDiv = document.getElementById('cartDiv');
//     const cartBtnCount = document.querySelector('#cartBtn .rounded-full');

//     function updateCartBtnCount() {
//         const cartItemsCount = cartDiv.querySelectorAll('.group').length;
//         cartBtnCount.textContent = cartItemsCount.toString().padStart(2, '0');
//     }


//     function addItemToCart(item) {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('group', 'flex', 'items-center', 'm-2', 'p-2', 'bg-slate-50', 'w-[300px]', 'sm:w-[520px]', 'h-[90px]', 'sm:h-[100px]', 'sm:m-4', 'cursor-pointer', 'overflow-hidden');

//         cartItem.innerHTML = item.innerHTML;

//         const button = cartItem.querySelector('.relative');
//         console.log(button); // Check if this correctly targets the button element

//         button.textContent = 'Delete'; // Ensure the text gets updated

//         const icon = cartItem.querySelector('.uil-shopping-bag');
//         icon.classList.remove('uil-shopping-bag');
//         icon.classList.add('uil-trash-alt');

//         const deleteButton = document.createElement('div');
//         deleteButton.classList.add('sm:group-hover:translate-x-[-30px]', 'group-hover:translate-x-[-50px]', 'transition', 'duration-[0.5s]', 'relative', 'w-[90px]', 'h-[90px]', 'right-0', 'bg-[#172554]', 'translate-x-[130px]', 'flex', 'justify-center', 'items-center', 'flex-col', 'sm:h-[120px]', 'sm:w-[150px]');

//         deleteButton.innerHTML = `
//             <p class="font-medium text-white">Delete</p>
//             <i class="uil uil-trash-alt text-[23px] text-white"></i>
//         `;

//         deleteButton.addEventListener('click', function () {
//             cartDiv.removeChild(cartItem);
//             updateCartBtnCount(); // Update count after deletion
//         });

//         cartItem.appendChild(deleteButton);
//         cartDiv.appendChild(cartItem);
//         updateCartBtnCount(); // Update count after addition
//         console.log(button);
//     }

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             addItemToCart(button);
//             button.style.display = 'none';
//             console.log(button);
//         });
//     });

//     cartDiv.addEventListener('click', function (event) {
//         const deleteItem = event.target.closest('.group');
//         if (deleteItem) {
//             cartDiv.removeChild(deleteItem);
//             updateCartBtnCount(); // Update count after deletion
//         }
//     });

//     const cartCloseBtn = document.getElementById('cartCloseBtn');
//     const cartSection = document.getElementById('cart');

//     cartCloseBtn.addEventListener('click', function () {
//         cartSection.classList.add('translate-x-[570px]');
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const cartDiv = document.getElementById('cartDiv');
    const addToCartButtons = document.querySelectorAll('.cardx');

    function updateCartBtnCount() {
        const cartBtnCount = document.querySelector('#cartBtn .rounded-full');
        const cartItemsCount = cartDiv.querySelectorAll('.group').length-1;
        cartBtnCount.textContent = cartItemsCount.toString().padStart(2, '0');
    }
    function updateStatusMessage() {
        const cartItemsCount = cartDiv.querySelectorAll('.group').length;
        if (cartItemsCount > 0) {
            let msg = document.getElementById("msg");
            msg.style.display = "none";
        } else {
            let msg = document.getElementById("msg");
            msg.style.display = "block";
        }
    }

    function addItemToCart(item) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('group', 'flex', 'items-center', 'm-2', 'p-2', 'bg-slate-50', 'w-[300px]', 'sm:w-[520px]', 'h-[90px]', 'sm:h-[100px]', 'sm:m-4', 'cursor-pointer', 'overflow-hidden');

        cartItem.innerHTML = item.innerHTML;

        const deleteButton = cartItem.querySelector('.ml-1');
        deleteButton.textContent = 'Delete';

        const icon = cartItem.querySelector('.uil-shopping-bag');
        icon.classList.remove('uil-shopping-bag');
        icon.classList.add('uil-trash-alt');


        deleteButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the event from reaching the cartItem

            cartDiv.removeChild(cartItem);
            updateCartBtnCount();
            updateStatusMessage()
        });

        cartDiv.appendChild(cartItem);
        updateCartBtnCount();
        updateStatusMessage()
    }

    cartDiv.addEventListener('click', function (event) {
        const deleteItem = event.target.closest('.cardx');
        if (deleteItem) {
            cartDiv.removeChild(deleteItem);
            updateCartBtnCount(); // Update count after deletion
        }
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            addItemToCart(button);
            button.style.display = 'none'; // Hide the "Add to Cart" button
        });
    });
});

