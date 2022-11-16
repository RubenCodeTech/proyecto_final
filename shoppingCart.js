
//#region TESTS
// console.log(prizeItemCartShop)
// function addItemsToShopCart() {
// ##########################
// let prizeItemCartShop = localStorage.getItem("prize");
// let nameItemCartShop = localStorage.getItem("name");
// let imgItemCartShop = localStorage.getItem("img");
// #####################
// ===DIVS DEL HTML===
//===ARRAYS VACIOS===
//===ARRAYS VACIOS DENTRO DE DIVS DEL HTML===
// let imgSpaceEmptyArray = imgSpace.appendChild(imgArrayItemCartShop);
// let nameSpaceEmptyArray = nameSpace.appendChild(nameArrayItemCartShop);
// let prizeSpaceEmptyArray = prizeSpace.appendChild(prizeArrayItemCartShop);
//===JSON.parse===
// let imgItemCartShop = (localStorage.getItem("img"));
// console.log(imgItemCartShop)
// let nameItemCartShop = (localStorage.getItem("name"));
// let prizeItemCartShop = (localStorage.getItem("prize"));
// console.log(prizeItemCartShop)
//==Array.push
// imgArrayItemCartShop.push(imgItemCartShop);
// nameArrayItemCartShop.push(nameItemCartShop);
// prizeArrayItemCartShop.push(prizeItemCartShop);
//===
// localStorage.setItem("imgArrayItemCartShop", JSON.stringify(imgItemCartShop));
// localStorage.setItem("nameArrayItemCartShop", JSON.stringify(nameItemCartShop));
// localStorage.setItem("prizeArrayItemCartShop", JSON.stringify(prizeItemCartShop));

// let divShoppingCart = document.createElement('div');
// ########################PRINTA EN LA CESTA
// imgSpace.lastChild.src = imgItemCartShop;
// nameSpace.innerText = nameItemCartShop;
// prizeSpace.innerText = prizeItemCartShop;
// #############################
// }
//#endregion
// let arrayVacio = []
// let elarrayconalgo = arrayVacio.push(elputonombre)
// nameSpace.appendChild(elarrayconalgo)


// let elputonombre = localStorage.getItem("name")
let nameSpace = document.getElementById('nameProductsShopCart')
let imgSpace = document.getElementById('imgProductsShopCart')
let prizeSpace = document.getElementById('prizeProductsShopCart')
// let nameArrayItemCartShop = nameSpace.append([(localStorage.getItem("name"))]);
// let prizeArrayItemCartShop = prizeSpace.append([(localStorage.getItem("prize"))]);
// let imgArrayItemCartShop = imgSpace.lastChild.src = [(localStorage.getItem("img"))];

let dataCartShopInShopPage = localStorage.getItem('dataCartShop');
let dataCartObj = JSON.parse(dataCartShopInShopPage);
let objectData = Object.values(dataCartObj)

imgSpace.lastChild.src = objectData[0]
nameSpace.textContent = objectData[1]
prizeSpace.textContent = objectData[2]
