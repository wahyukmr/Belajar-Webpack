<h1>Assets Management</h1>

<h2>MiniCssExtractPlugin</h2>

Merupakan salah satu paket pihak ketiga untuk mengekstrak CSS ke file yang terpisah agar tidak masuk ke dalam file JS-nya.

konfigurasi untuk _development_ dan _production_ akan berbeda,

<h2>Webpack Dev Server</h2>

Menjalankan server dengan API dari Node.js. ketika terjadi perubahan, maka perubahan itu akan terlihat pada port yang telah ditentukan, namun tidak atau belum terbundling. Jadi harus melakukan bundle secara manual baik di mode development maupun production.

<h2>Pengelolaan Aset di Webpack</h2>

Agar aset seperti gambar dan lain-lain dapat di bundle kita perlu `html-loader` dan `asset/resource`.

`html-loader` memungkinkan untuk membundler atribut src di `html`.
