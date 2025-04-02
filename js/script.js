const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const cartButton = document.getElementById("cart-button");
const cartSvg = document.getElementById("cart-path");
const navMenu = document.querySelector("nav");
const mobileOverlay = document.getElementById("mobile-overlay");
const desktopOverlay = document.getElementById("desktop-overlay");
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
const overlayNextButton = document.getElementById("overlay-next-button");
const overlayPreviousButton = document.getElementById("overlay-previous-button");
const productPicture = document.querySelector(".product-picture");
const miniPicture = document.querySelector(".mini-picture");
const overlayMainPicture = document.getElementById("overlay-main-picture");
const overlayThumbWrapper = document.getElementById("overlay-thumb-wrapper");
const overlayCloseButton = document.getElementById("overlay-close-button");
const overlayThumbPictures = document.querySelectorAll(".overlay-thumbnail");


let cartDiplayed = false;
let imageNumber = 1;

// Function difinition //

function addToCart () {
    if (chosenQuantityText.textContent === "0") {return}
    emptyCart.style.display ="none";
    cartWrapper.style.display = "flex";
    totalQuantity.textContent = chosenQuantityText.textContent;
    totalPrice.textContent = `$${125*Number(chosenQuantityText.textContent)}.00`;
    productCount.textContent = chosenQuantityText.textContent;
    productCount.style.display = "block";
}

function closeDesktopOverlay () {
    desktopOverlay.style.display = "none";
}

function closeNavMenu () {
    navMenu.style.display = "none";
    mobileOverlay.style.display = "none";
}

function deleteCart () {
    totalQuantity.textContent = 0;
    totalPrice.textContent = `$0.00`;
    emptyCart.style.display ="block";
    cartWrapper.style.display = "none";
    productCount.textContent = "";
    productCount.style.display = "none";
}

function displayCart () {
    if (!cartDiplayed) {
        customerCartMenu.style.display = "block";
        cartDiplayed = true;
        cartSvg.style.fill = "#000000";
    }
    else {
        customerCartMenu.style.display = "none";
        cartDiplayed = false;
        cartSvg.style.fill="#69707D"
    }
}

function displayDesktopOverlay () {
    desktopOverlay.style.display = "flex";
    overlayThumbWrapper.style.display = "flex";
}

function displayNavMenu () {
    navMenu.style.display = "flex";
    mobileOverlay.style.display = "block";
}

function increaseQuantity () {
    let quantity = Number(chosenQuantityText.textContent);
    chosenQuantityText.textContent = quantity + 1;
}

function nextImage () {
    imageNumber++;
    if (imageNumber > 4) {imageNumber = 1}
    productPicture.src = `./images/image-product-${imageNumber}.jpg`;
}

function overlayNextImage () {
    imageNumber++;
    if (imageNumber > 4) {imageNumber = 1}
    overlayMainPicture.src = `./images/image-product-${imageNumber}.jpg`;
}

function overlayPrevioustImage () {
    imageNumber--;
    if (imageNumber < 1) {imageNumber = 4}
    overlayMainPicture.src = `./images/image-product-${imageNumber}.jpg`;
}

function previousImage () {
    imageNumber--;
    if (imageNumber < 1) {imageNumber = 4}
    productPicture.src = `./images/image-product-${imageNumber}.jpg`;
}

function reduceQuantity () {
    let quantity = Number(chosenQuantityText.textContent);
    if (quantity === 0) {return}
    chosenQuantityText.textContent = quantity - 1;
}


// Add Event Listener definition //

addCartButton.addEventListener("click", ()=>{
    addToCart();
})

cartButton.addEventListener("click",()=>{
    displayCart();
})

closeMenuButton.addEventListener("click",()=>{
    closeNavMenu();
})

checkoutButton.addEventListener("click", ()=>{
    displayCart();
})

deleteButton.addEventListener("click", ()=>{
    deleteCart();
})

increaseQuantityButton.addEventListener("click", ()=>{
    increaseQuantity();
})

nextButton.addEventListener("click", ()=>{
    nextImage();
})

openMenuButton.addEventListener("click",()=>{
    displayNavMenu();
})

overlayCloseButton.addEventListener("click", ()=>{
    closeDesktopOverlay();
})

previousButton.addEventListener("click", ()=>{
    previousImage();
})

productCount.addEventListener("click",()=>{
    displayCart();
})

productPicture.addEventListener("click",()=>{
    overlayMainPicture.src = "./images/image-product-1.jpg"
    displayDesktopOverlay();
})

reduceQuantityButton.addEventListener("click", ()=>{
    reduceQuantity();
})

overlayNextButton.addEventListener("click", ()=>{
    overlayNextImage();
})

overlayPreviousButton.addEventListener("click", ()=>{
    overlayPreviousImage();
})

overlayThumbPictures.forEach((picture) => {
    picture.addEventListener("click",()=>{
        const pictureId = picture.id;
        const idNumber = parseInt(pictureId.slice(-1));
        overlayMainPicture.src = `./images/image-product-${idNumber}.jpg`;
    })
})

overlayThumbPictures.forEach((picture) => {
    picture.addEventListener("mouseenter", () => {
        picture.style.border = "3px solid var(--orange)";
    });

    picture.addEventListener("mouseleave", () => {
        picture.style.border = "";
    });
});