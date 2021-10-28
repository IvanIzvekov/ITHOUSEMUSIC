document.querySelectorAll(".item").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.currentTarget.classList.toggle("item-focus");
        updateSumText();
    })
})

document.querySelectorAll(".item").forEach((elem) => {
    elem.addEventListener("mousedown", (event) => {
        let audio = new Audio();
        audio.src = "source/menu.mp3";
        audio.play();
        event.currentTarget.classList.add("item-click");
    })
})

document.addEventListener("mouseup", (event) => {
    
    document.querySelectorAll(".item").forEach((elem) => {
        elem.classList.remove("item-click");
    })  
})

function updateSumText(){
    let sum = 0;

    document.querySelectorAll(".item-focus").forEach((elem) => {
        sum += +elem.getAttribute('data-price');
    })
    
    const sumText = document.querySelector("#sum");
    if(sum != 0){
        sumText.innerHTML = "Итоговая сумма: " + sum + "₽";
    }
    else{
        sumText.innerHTML = "Выберите услуги";
    }
}

document.querySelector("#modal-button").addEventListener("click", () => {
    document.querySelector(".modal__wrap").classList.add('modal__active');
})

document.querySelector(".modal__wrap").addEventListener("click", (event) => {
    if(event.target == event.currentTarget){
        document.querySelector(".modal__wrap").classList.remove('modal__active');
    }
})

document.querySelector("#pay-button").addEventListener("click", (event) => {
    event.preventDefault();
    let modal = document.querySelector(".modal");

    document.querySelector(".modal__content").classList.add('unvisible');

    let successImg = document.createElement('img');
    successImg.src="source/checked.png";
    successImg.classList.add("successImg");
    modal.append(successImg);

    let successText = document.createElement('span');
    successText.classList.add("successText");
    successText.innerHTML = "Заказ подтверждён";

    
    modal.append(successText);

    

    let audio = new Audio();
    audio.src = "source/pay.mp3";
    audio.play();
})
