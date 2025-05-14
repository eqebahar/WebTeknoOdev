$(document).ready(function () {
  var outputList = document.getElementById("list-output");
  var newsUrl = "https://newsapi.org/v2/everything?q=";
  var apiKey = "615a0da0b081420c9072d03772f653e6";
  var placeHldr = "https://via.placeholder.com/150";
  var searchData;

  // listener for search button
  $("#search").click(function () {
      outputList.innerHTML = "";
      document.body.style.backgroundImage = "url('')";
      searchData = $("#search-box").val().trim();

      if (searchData === "") {
          displayError();
      } else {
          const today = new Date().toISOString().split('T')[0];  // Bugünün tarihi
          const fiveDaysAgo = new Date();
          fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);  // 5 gün öncesinin tarihi
          const fiveDaysAgoString = fiveDaysAgo.toISOString().split('T')[0]; // 5 gün önceki tarih

          const url = `${newsUrl}${encodeURIComponent(searchData)}&from=${fiveDaysAgoString}&to=${today}&sortBy=publishedAt&language=tr&apiKey=${apiKey}`;

          $.ajax({
              url: url,
              dataType: "json",
              success: function (response) {
                  console.log("API Response:", response);  // Tüm yanıtı kontrol et
                  if (response.status === "ok" && response.articles && response.articles.length > 0) {
                      $("#title").animate({ 'margin-top': '5px' }, 1000);
                      $(".book-list").css("visibility", "visible");
                      displayResults(response.articles.slice(0, 10));
                  } else {
                      alert("Sonuç bulunamadı, tekrar deneyin!");
                  }
              },
              error: function (xhr, status, error) {
                  console.log("Error:", xhr.responseText);  // Hata yanıtını kontrol et
                  alert("Bir hata oluştu. Lütfen tekrar deneyin!");
              }
          });
      }

      $("#search-box").val(""); // temizle
  });

  function displayResults(articles) {
      for (var i = 0; i < articles.length; i += 2) {
          var article1 = articles[i];
          var article2 = articles[i + 1];

          outputList.innerHTML += '<div class="row mt-4">' +
              formatOutput(article1) +
              (article2 ? formatOutput(article2) : '') +
              '</div>';
      }
  }

  function formatOutput(article) {
    var image = article.urlToImage || placeHldr;  // Görselin URL'si veya yer tutucu
    var title = article.title || "Başlık yok";
    var description = article.description || "Açıklama yok";
    var source = article.source.name || "Kaynak yok";
    var url = article.url;

    var htmlCard = `<div class="col-lg-6">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${image}" class="card-img" alt="${title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text"><small class="text-muted">Kaynak: ${source}</small></p>
                        <a target="_blank" href="${url}" class="btn btn-secondary">Haberi Oku</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return htmlCard;
}



  function displayError() {
      alert("Arama terimi boş olamaz!");
  }
});
