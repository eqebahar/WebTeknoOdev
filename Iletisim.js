const Ad = document.getElementById("isim");
const Soyad = document.getElementById("soyisim");
const Email = document.getElementById("email");
const Cinsiyets = document.getElementsByName("cinsiyet");
const aciklama = document.getElementById("yorum");

const message0 = document.querySelector(".message0"); // Ad mesajı
const message1 = document.querySelector(".message1"); // Soyad mesajı
const message2 = document.querySelector(".message2"); // Email mesajı
const message3 = document.querySelector(".message3"); // Cinsiyet mesajı
const message4 = document.querySelector(".message4"); // Açıklama mesajı

const form = document.querySelector(".anaForm");

form.addEventListener("submit", function (e) {
  let formValid = true;

  // --- Ad kontrolü ---
  const Adpattern = /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]{1,25}$/; // Türkçe karakter dahil ve boşluk izinli
  if (Adpattern.test(Ad.value.trim())) {
    message0.textContent = "";
    Ad.classList.remove("is-invalid");
    Ad.classList.add("is-valid");
  } else {
    message0.textContent = "Lütfen geçerli bir ad giriniz (en fazla 25 karakter)";
    message0.style.color = "red";
    Ad.classList.remove("is-valid");
    Ad.classList.add("is-invalid");
    formValid = false;
  }

  // --- Soyad kontrolü ---
  const Soyadpattern = /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]{1,25}$/; // Türkçe karakter dahil ve boşluk izinli
  if (Soyadpattern.test(Soyad.value.trim())) {
    message1.textContent = "";
    Soyad.classList.remove("is-invalid");
    Soyad.classList.add("is-valid");
  } else {
    message1.textContent = "Lütfen geçerli bir soyad giriniz (en fazla 25 karakter)";
    message1.style.color = "red";
    Soyad.classList.remove("is-valid");
    Soyad.classList.add("is-invalid");
    formValid = false;
  }

  // --- Email kontrolü ---
  const EmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (EmailPattern.test(Email.value.trim())) {
    message2.textContent = "";
    Email.classList.remove("is-invalid");
    Email.classList.add("is-valid");
  } else {
    message2.textContent = "Bu eposta adresi geçersizdir";
    message2.style.color = "red";
    Email.classList.remove("is-valid");
    Email.classList.add("is-invalid");
    formValid = false;
  }

  // --- Cinsiyet kontrolü ---
  let RadioButtonSecim = false;
  for (let i = 0; i < Cinsiyets.length; i++) {
    if (Cinsiyets[i].checked) {
      RadioButtonSecim = true;
      break;
    }
  }
  if (RadioButtonSecim) {
    message3.textContent = "";
  } else {
    message3.textContent = "Lütfen seçim yapınız";
    message3.style.color = "red";
    formValid = false;
  }

  // --- Açıklama kontrolü ---
  if (aciklama.value.trim() !== "") {
    message4.textContent = "";
    aciklama.classList.remove("is-invalid");
    aciklama.classList.add("is-valid");
  } else {
    message4.textContent = "Lütfen bu alanı boş bırakmayınız";
    message4.style.color = "red";
    aciklama.classList.remove("is-valid");
    aciklama.classList.add("is-invalid");
    formValid = false;
  }

  // Eğer form geçerli değilse gönderimi durdur
  if (!formValid) {
    e.preventDefault();
  }
});
