// FAQ START
arrow.onclick = function(){
    if(textFaq.hidden == true){
        textFaq.hidden = false
        arrow.style.transform = 'rotate(0deg)';
    }else{
        textFaq.hidden=true
        arrow.style.transform = 'rotate(180deg)';
    }
}
arrowSecond.onclick = function (){
    if(text_Faq_Second.hidden == true){
        text_Faq_Second.hidden = false
        arrowSecond.style.transform = 'rotate(0deg)';
    } else{
        text_Faq_Second.hidden = true
        arrowSecond.style.transform = 'rotate(180deg)';
    }
}
arrowThird.onclick =  function (){
    if(text_Faq_Third.hidden == true){
        text_Faq_Third.hidden = false
        arrowThird.style.transform = 'rotate(0deg)';
    }else{
        text_Faq_Third.hidden = true;
        
        arrowThird.style.transform = 'rotate(180deg)';
    }
}
// FAQ END

// SHOPPING CART START
// let buttonShop = document.getElementsByClassName('addbutton')[0]
let coffeePrize = document.getElementsByClassName('prizeCoffee')[0]
// let coffeeName = document.getElementsByClassName('coffeeNames')[0]
let addButtonShop = document.getElementsByClassName('addbutton')
for(i=0; i< addButtonShop.length; i++){
   addButtonShop[i].onclick = function(){
       
        let imgShopItems = this.parentElement.querySelector('img');
        let prizeShopItems = this.parentElement.getElementsByClassName('prizeCoffee')[0];
        let tittleShopItems = this.parentElement.getElementsByClassName('coffeNames')[0];
        let cestaCompra = document.getElementById('cestaCompra')
        localStorage.setItem("prize",prizeShopItems.textContent);
        localStorage.setItem("name",tittleShopItems.textContent);
        localStorage.setItem("img",imgShopItems.src);
        // cestaCompra.textContent = localStorage.getItem("prize");
        // cestaCompra.textContent = localStorage.getItem("name");
        // cestaCompra.textContent = localStorage.getItem("img");
        
        
        // cestaCompra.innerText = localStorage.getItem("name");
        // cestaCompra.innerText = localStorage.getItem("img");
        console.log(tittleShopItems, imgShopItems, prizeShopItems);
    
    }
    // addButtonShop[i].addEventListener('click', add)
}
// function add() {
//     let shopItem = addButtonShop[i];
//     let tittleShopItems = this.parentElement.getElementsByClassName('coffeNames')[0];
//     console.log(tittleShopItems);
// }


// let costaRicaCoffee = document.getElementById('costaRicaName')
// let colombiaCoffee = document.getElementById('colombiaName')
// let laosCoffee = document.getElementById('laosName')
// let etiopiaCoffee = document.getElementById('etiopiaName')
// buttonShop.onclick = function (){
//     document.getElementById('latienda').innerText = (costaRicaCoffee).textContent
//     document.getElementById('latienda').innerText = (colombiaCoffee).textContent
//     document.getElementById('latienda').innerText = (laosCoffee).textContent
//     document.getElementById('latienda').innerText = (etiopiaCoffee).textContent
// }
// SHOPPING CART END

// FORM START
// const form = document.getElementById('form');
// const nameForm = document.getElementById('username');
// const emailForm = document.getElementById('email');
// const tlfForm = document.getElementById('tlf');
// const opinionForm = docuement.getElementById('opinion');
// const submitForm = docuement.getElementById('submit');

// submitForm.addEventListener('submit', (e) => {
//     let pattern = /^[w]{6,8}$/;
//     let currentValue = e.target.value;
//     console.log(pattern.test(currentValue));
// });
// FORM END