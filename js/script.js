const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const cartButton = document.getElementById("cart-button");
const navMenu = document.querySelector("nav");
const overlay = document.getElementById("overlay");
const customerCartMenu = document.getElementById("customer-cart");
const productCount = document.getElementById("product-count");
const reduceQuantityButton = document.getElementById("reduce-quantity");
const increaseQuantityButton = document.getElementById("increase-quantity");
const chosenQuantityText = document.querySelector(".chosen-quantity");
const addCartButton = document.getElementById("add-cart");
const emptyCart = document.getElementById("empty-cart");
const cartWrapper = document.querySelector(".cart-wrapper");
const totalQuantity = document.getElementById("total-quantity");
const totalPrice = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-button");
const deleteButton = document.getElementById("delete-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const productPicture = document.querySelector(".product-picture");
const miniPicture = document.querySelector(".mini-picture");


let cartDiplayed = false;
let imageNumber = 1;

function displayNavMenu () {
    navMenu.style.display = "flex";
    overlay.style.display = "block";
}

function closeNavMenu () {
    navMenu.style.display = "none";
    overlay.style.display = "none";
}

function displayCart () {
    if (!cartDiplayed) {
        customerCartMenu.style.display = "block";
        cartDiplayed = true;
        cartButton.style.fill = "#000000";
    }
    else {
        customerCartMenu.style.display = "none";
        cartDiplayed = false;
        cartButton.style.fill="#69707D"
    }
}

function nextImage () {
    imageNumber++;
    if (imageNumber > 4) {imageNumber = 1}
    productPicture.src = `./images/image-product-${imageNumber}.jpg`;
    
}

function previousImage () {

}

function increaseQuantity () {
    let quantity = Number(chosenQuantityText.textContent);
    chosenQuantityText.textContent = quantity + 1;
}

function reduceQuantity () {
    let quantity = Number(chosenQuantityText.textContent);
    if (quantity === 0) {return}
    chosenQuantityText.textContent = quantity - 1;
}

function addToCart () {
    if (chosenQuantityText.textContent === "0") {return}
    emptyCart.style.display ="none";
    cartWrapper.style.display = "flex";
    totalQuantity.textContent = chosenQuantityText.textContent;
    totalPrice.textContent = `$${125*Number(chosenQuantityText.textContent)}.00`;
    productCount.textContent = chosenQuantityText.textContent;
    productCount.style.display = "block";
}

function deleteCart () {
    totalQuantity.textContent = 0;
    totalPrice.textContent = `$0.00`;
    emptyCart.style.display ="block";
    cartWrapper.style.display = "none";
    productCount.textContent = "";
    productCount.style.display = "none";
}

openMenuButton.addEventListener("click",()=>{
    displayNavMenu();
})

closeMenuButton.addEventListener("click",()=>{
    closeNavMenu();
})

cartButton.addEventListener("click",()=>{
    displayCart();
})

productCount.addEventListener("click",()=>{
    displayCart();
})

increaseQuantityButton.addEventListener("click", ()=>{
    increaseQuantity();
})

reduceQuantityButton.addEventListener("click", ()=>{
    reduceQuantity();
})

addCartButton.addEventListener("click", ()=>{
    addToCart();
})

checkoutButton.addEventListener("click", ()=>{
    displayCart();
})

deleteButton.addEventListener("click", ()=>{
    deleteCart();
})

nextButton.addEventListener("click", ()=>{
    nextImage();
})

previousButton.addEventListener("click", ()=>{
    previousImage();
})