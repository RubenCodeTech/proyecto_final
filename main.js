// FAQ START
arrow.onclick = function () {
    if (textFaq.hidden == true) {
        textFaq.hidden = false
        arrow.style.transform = 'rotate(0deg)';
    } else {
        textFaq.hidden = true
        arrow.style.transform = 'rotate(180deg)';
    }
}
arrowSecond.onclick = function () {
    if (text_Faq_Second.hidden == true) {
        text_Faq_Second.hidden = false
        arrowSecond.style.transform = 'rotate(0deg)';
    } else {
        text_Faq_Second.hidden = true
        arrowSecond.style.transform = 'rotate(180deg)';
    }
}
arrowThird.onclick = function () {
    if (text_Faq_Third.hidden == true) {
        text_Faq_Third.hidden = false
        arrowThird.style.transform = 'rotate(0deg)';
    } else {
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
for (i = 0; i < addButtonShop.length; i++) {
    addButtonShop[i].onclick = function () {

        let imgShopItems = this.parentElement.querySelector('img');
        let prizeShopItems = this.parentElement.getElementsByClassName('prizeCoffee')[0];
        let tittleShopItems = this.parentElement.getElementsByClassName('coffeNames')[0];

        let thePrize = prizeShopItems.textContent;
        let theTittle = tittleShopItems.textContent;
        let theImg = imgShopItems.src;

        let dataCartShop = {
            img: theImg,
            tittle: theTittle,
            name: thePrize
        }
        console.log(dataCartShop)
        localStorage.setItem('dataCartShop', JSON.stringify(dataCartShop));
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
const form = document.getElementById('form');
const inputsForm = document.querySelectorAll('#form input');
console.log(inputsForm)
const regExFormObject = {
    usuario: /^[a-zA-Z\s]{4,24}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]{1,3}$/,
    telf: /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{3})$/,
    opinion: /^[a-zA-Z0-9]{1,140}$/,
}
// document.querySelector()
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     if (inputsForm.value.length === "") {
//         alert("mal");
//       }
// });
// function validateForm() {
//     if (inputsForm == "") {
//       alert("mal");
//     }
//   }
const verifyEverySingleCharacter = (e) => {
    switch (e.target.name) {
        case "username":
            if (regExFormObject.usuario.test(e.target.value) == true) {
                document.querySelector('#username').classList.remove('formInvalid');
                document.querySelector('#username').classList.add('formAcepted');
                document.querySelector('.formName .formTextError').classList.remove('formTextErrorActive')
                // verify.usuario = true;
            } else {
                document.querySelector('#username').classList.add('formInvalid');
                document.querySelector('#username').classList.remove('formAcepted');
                document.querySelector('.formName .formTextError').classList.add('formTextErrorActive')
                // verify[usuario] = false ;
            }
            break;
        case "email":
            if (regExFormObject.email.test(e.target.value) == true) {
                document.querySelector('#email').classList.remove('formInvalid');
                document.querySelector('#email').classList.add('formAcepted');
                document.querySelector('.formEmail .formTextError').classList.remove('formTextErrorActive')
                // verify['email'] = true;
            } else {
                document.querySelector('#email').classList.add('formInvalid');
                document.querySelector('#email').classList.remove('formAcepted');
                document.querySelector('.formEmail .formTextError').classList.add('formTextErrorActive')
                // verify['email'] = false;
            }
            break;
        case "tlf":
            if (regExFormObject.telf.test(e.target.value) == true) {
                document.querySelector('#tlf').classList.remove('formInvalid');
                document.querySelector('#tlf').classList.add('formAcepted');
                document.querySelector('.formerrortelf .formTextError').classList.remove('formTextErrorActive')
                // verify['telf'] = true;
            } else {
                document.querySelector('#tlf').classList.add('formInvalid');
                document.querySelector('#tlf').classList.remove('formAcepted');
                document.querySelector('.formTelf .formTextError').classList.add('formTextErrorActive')
                // verify['telf'] = false;
            }

            break;
        case "opinion":
            if (regExFormObject.opinion.test(e.target.value) == true) {
                document.querySelector('#opinion').classList.remove('formInvalid');
                document.querySelector('#opinion').classList.add('formAcepted');
                document.querySelector('.formOpinion .formTextError').classList.remove('formTextErrorActive')
                // verify['telf'] = true;

            } else {
                document.querySelector('#opinion').classList.add('formInvalid');
                document.querySelector('#opinion').classList.remove('formAcepted');
                document.querySelector('.formOpinion .formTextError').classList.add('formTextErrorActive')
                // verify['telf'] = false;

            }
            break;
    }

}
inputsForm.forEach((input) => {
    input.addEventListener('keyup', verifyEverySingleCharacter);
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

// const terms = document.getElementById('aceptpriv');
    // if ((verify.usuario && verify.email && verify.telf && verify.opinion)==true) {
    //     inputsForm.reset();
    //     document.getElementById('formDataAcepted').classList.add('formDataAceptedActive')
    // }
    
// });
let submit = document.getElementById('submit')
submit.onclick = function(){
    
    let inputName = document.querySelector('#username').value;
    let inputEmail = document.querySelector('#email').value;
    let inputOpinion = document.querySelector('#opinion').value;
    let inputTlf = document.querySelector('#tlf').value;
    localStorage.setItem("name", JSON.stringify(inputName));
    localStorage.setItem("Email", JSON.stringify(inputEmail));
    localStorage.setItem("Opinion", JSON.stringify(inputOpinion));
    localStorage.setItem("telf", JSON.stringify(inputTlf));    
}
// FORM END