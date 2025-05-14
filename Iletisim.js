

const Ad = document.getElementById("isim");
const Soyad = document.getElementById("soyisim");
const Email = document.querySelector("#email");
const Cinsiyets = document.getElementsByName("cinsiyet");
const aciklama = document.getElementById("yorum");
const message0 = document.querySelector(".message0");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const message3 = document.querySelector(".message3");
const message4 = document.querySelector(".message4");

const form = document.querySelector(".anaForm");



form.addEventListener("submit", e => {
    const EmailPattern = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
    if (EmailPattern.test(form.Eposta.value) == true) {
        message0.textContent = null;
    }
    else {
        message0.textContent = "Bu eposta adresi geçersizdir";
        message0.style.color = "red";
        e.preventDefault();
        return false;
    }

})

form.addEventListener("submit", e => {

    const Adpattern = /^[a-zA-z]{1,25}$/;
    if (Adpattern.test(form.Ad.value) == true) {
        message1.textContent = null;
    }
    else {
        message1.textContent = "Lütfen bu alanı boş bırakmayınız";
        message1.style.color = "red";

        return false;
    }

})

form.addEventListener("submit", e => {

    const Soyadpattern = /^[a-zA-z]{1,25}$/;
    if (Soyadpattern.test(form.Soyad.value) == true) {
        message2.textContent = null;
    }
    else {
        message2.textContent = "Lütfen bu alanı boş bırakmayınız";
        message2.style.color = "red";
        e.preventDefault();
        return false;
    }
})

form.addEventListener("submit", e => {

    let RadioButtonSecim = false;
    for (let i = 0; i < Cinsiyets.length; i++) {
        if (Cinsiyets[i].checked) {
            RadioButtonSecim = true;
            break;

        }
    }

    if (RadioButtonSecim == true) {
        message3.textContent = null;
    }
    else {
        message3.textContent = "Lütfen seçim yapınız";
        message3.style.color = "red";
        e.preventDefault();
        return false;
    }
})

form.addEventListener("submit", e => {


    if (aciklama.value != "") {
        message4.textContent = null;
    }
    else {
        message4.textContent = "Lütfen bu alanı boş bırakmayınız";
        message4.style.color = "red";
        e.preventDefault();
        return false;
    }
})