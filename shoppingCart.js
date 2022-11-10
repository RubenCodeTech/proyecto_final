

// console.log(prizeItemCartShop)
// function addItemsToShopCart() {
    let prizeItemCartShop = localStorage.getItem("prize");
    let nameItemCartShop = localStorage.getItem("name");
    let imgItemCartShop = localStorage.getItem("img");
    
    let imgSpace = document.getElementById('imgProductsShopCart')
    let nameSpace = document.getElementById('nameProductsShopCart')
    let prizeSpace = document.getElementById('prizeProductsShopCart')
    // let divShoppingCart = document.createElement('div');
    imgSpace.lastChild.src = imgItemCartShop;
    nameSpace.innerText = nameItemCartShop;
    prizeSpace.innerText = prizeItemCartShop;

// }


// function addItemToShoppingCart(tittleShopItems, imgShopItems, prizeShopItems){
//     let shoppingCartRow = document.createElement('div');
//     let shoppingDoc
// }