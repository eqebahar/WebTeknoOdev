<?php
// Form verileri POST ile gelmişse işle
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Güvenlik için htmlspecialchars ile temizleme yapalım
    $ad = htmlspecialchars($_POST['Ad'] ?? '');
    $soyad = htmlspecialchars($_POST['Soyad'] ?? '');
    $email = htmlspecialchars($_POST['Eposta'] ?? '');
    $cinsiyet = htmlspecialchars($_POST['cinsiyet'] ?? '');
    $dtarihi = htmlspecialchars($_POST['dtarihi'] ?? '');
    $ulke = htmlspecialchars($_POST['Ulke'] ?? '');
    $universite = htmlspecialchars($_POST['universite'] ?? '');
    $diller = $_POST['dil'] ?? []; // dizi olarak geliyor
    $programlamaDili = htmlspecialchars($_POST['programlamaDilleri'] ?? '');
    $yorum = htmlspecialchars($_POST['yorum'] ?? '');
} else {
    // Eğer form gönderilmemişse ana sayfaya yönlendirebilirsin
    header("Location: Iletisim.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <title>Form Verileri</title>
    <link rel="stylesheet" href="../bootstrap-5.1.3-dist/css/bootstrap.min.css">
</head>

<body>
    <div class="container mt-5">
        <h2>Gönderilen Form Bilgileri</h2>
        <table class="table table-bordered mt-3">
            <tbody>
                <tr>
                    <th>Ad</th>
                    <td><?= $ad ?></td>
                </tr>
                <tr>
                    <th>Soyad</th>
                    <td><?= $soyad ?></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td><?= $email ?></td>
                </tr>
                <tr>
                    <th>Cinsiyet</th>
                    <td><?= $cinsiyet ?></td>
                </tr>
                <tr>
                    <th>Doğum Tarihi</th>
                    <td><?= $dtarihi ?></td>
                </tr>
                <tr>
                    <th>Ülke</th>
                    <td><?= $ulke ?></td>
                </tr>
                <tr>
                    <th>Üniversite</th>
                    <td><?= $universite ?></td>
                </tr>
                <tr>
                    <th>Bildiği Yabancı Diller</th>
                    <td>
                        <?php 
                        if (!empty($diller)) {
                            echo implode(", ", array_map('htmlspecialchars', $diller));
                        } else {
                            echo "Belirtilmedi";
                        }
                        ?>
                    </td>
                </tr>
                <tr>
                    <th>Bildiği Programlama Dili</th>
                    <td><?= $programlamaDili ?></td>
                </tr>
                <tr>
                    <th>Açıklama</th>
                    <td><?= nl2br($yorum) ?></td>
                </tr>
            </tbody>
        </table>
        <a href="Iletisim.html" class="btn btn-primary">Geri Dön</a>
    </div>
</body>

</html>
