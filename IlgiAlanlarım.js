document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "AIzaSyDyantRO66SvtFcK3kz7r6I4Hapa5myC0w";
  const searchBtn = document.getElementById("search");
  const searchBox = document.getElementById("search-box");
  const listOutput = document.getElementById("list-output");

  searchBtn.addEventListener("click", function () {
    const query = searchBox.value.trim();
    listOutput.innerHTML = ""; // Önceki sonuçları temizle

    if (!query) {
      alert("Lütfen arama terimi girin!");
      return;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=10`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.items || data.items.length === 0) {
          listOutput.innerHTML = `<p class="text-center">Sonuç bulunamadı.</p>`;
          return;
        }

        // Her kitap için kart oluştur
        data.items.forEach((item) => {
          const book = item.volumeInfo;
          const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/128x195?text=No+Image";
          const title = book.title || "Başlık yok";
          const authors = book.authors ? book.authors.join(", ") : "Yazar bilgisi yok";
          const description = book.description ? book.description.substring(0, 150) + "..." : "Açıklama yok";
          const infoLink = book.infoLink || "#";

          const cardHTML = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${thumbnail}" class="card-img" alt="${title}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"><small class="text-muted">${authors}</small></p>
                    <p class="card-text">${description}</p>
                    <a href="${infoLink}" target="_blank" class="btn btn-primary btn-sm">Detayları Gör</a>
                  </div>
                </div>
              </div>
            </div>
          `;
          listOutput.insertAdjacentHTML("beforeend", cardHTML);
        });
      })
      .catch((error) => {
        console.error("Hata:", error);
        listOutput.innerHTML = `<p class="text-center text-danger">Bir hata oluştu. Lütfen tekrar deneyin.</p>`;
      });

    searchBox.value = ""; // Arama kutusunu temizle
  });
});
