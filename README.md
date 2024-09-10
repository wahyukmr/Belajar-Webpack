# Code Splitting

_Code Splitting_ adalah teknik untuk membagi kode aplikasi menjadi beberapa bundel yang dapat dimuat secara dinamis. Teknik ini memungkinkan aplikasi untuk memuat hanya kode yang diperlukan untuk saat itu, yang mengurangi waktu pemuatan halaman dan meningkatkan kinerja secara keseluruhan. Webpack mendukung tiga pendekatan umum untuk pemisahan kode yang tersedia: **entry point**, **dynamic import**, dan **Prevent Duplication**. Berikut adalah penjelasannya:

## Entry Point Splitting

Webpack memungkinkan pemisahan kode dengan menggunakan beberapa entry points. Ini berarti kita dapat membuat bundel terpisah untuk setiap entry point yang dikonfigurasi.

Namun cara ini lebih manual dan memiliki beberapa kendala, yaitu: Jika ada modul yang diduplikasi di antara potongan-potongan entri, modul-modul tersebut akan disertakan di dalam kedua bundel tersebut. Hal ini tidak fleksibel dan tidak dapat digunakan untuk membagi kode secara dinamis dengan logika aplikasi inti.

Contoh Konfigurasi:

```javascript
module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
};
```

Pada konfigurasi ini, Webpack menghasilkan dua bundel terpisah, `app.bundle.js` dan `vendor.bundle.js`, berdasarkan entry point yang terdefinisi.

## Prevent Duplication

Jika mempunyai multiple entries dan setiap file JavaScript yang menjadi entry terhubung ke sebuah library yang sama, hal ini akan membuat setiap file JS tersebut akan memiliki duplikasi kode library yang digunakan.

Penggunaan _SplitChunksPlugin_ dan pengaturan _entry dependencies_ pada Webpack untuk mencegah duplikasi bukanlah dua pilihan yang saling eksklusif, tetapi sering kali diterapkan bersamaan. Kedua konsep tersebut bekerja dalam tujuan yang sama: mengoptimalkan bundling dan mencegah duplikasi dependensi di proyek, namun dengan pendekatan yang berbeda.

Penjelasan Masing-Masing Konsep:

### SplitChunksPlugin:

**Fungsi Utama**: Digunakan untuk membagi kode menjadi beberapa bundle terpisah secara otomatis, dengan memecah dependencies yang dipakai secara umum antara beberapa entry points (seperti kode dari node_modules yang dipakai di berbagai modul).

**Cara Kerja**: Plugin ini akan menganalisis setiap entry point dan memeriksa apakah ada dependensi yang sama digunakan di lebih dari satu bundle. Dependensi yang sama kemudian akan dikeluarkan menjadi chunk terpisah yang dapat digunakan bersama oleh beberapa entry points.

**Contoh**: Jika ada dua entry point menggunakan library besar seperti lodash, plugin ini akan memisahkan lodash ke dalam bundle tersendiri sehingga tidak di-bundle ulang di kedua entry points, melainkan dipakai dari satu bundle terpisah.

### Entry Dependencies:

**Fungsi Utama**: Menentukan dengan tepat apa yang masuk ke dalam bundling dari setiap entry point di aplikasi.

**Cara Kerja**: Kamu bisa secara manual menentukan dependency sharing dengan menggunakan entry dependencies atau entry points yang saling bergantung. Ini memastikan bahwa dependencies yang umum di beberapa entry points tidak di-bundle lebih dari sekali.

**Contoh**: Kamu bisa menentukan entry points secara manual di webpack.config.js untuk setiap bagian dari aplikasi yang berbeda (misalnya, halaman yang berbeda) dan menentukan bahwa beberapa entry points harus berbagi dependencies seperti library vendor.

Kedua pendekatan ini sering kali digunakan bersamaan untuk mendapatkan keseimbangan antara kemudahan otomatisasi dan kontrol manual dalam mencegah duplikasi kode. Menggunakan keduanya memungkinkan kamu untuk meminimalkan ukuran bundle secara efektif dan memastikan performa aplikasi tetap optimal.

Contoh Kasus Penggunaan Bersama:

- Kamu memiliki beberapa halaman di aplikasi (misalnya, `home.js`, `about.js`, dan `contact.js`).
- Semua halaman menggunakan dependensi umum seperti React dan Axios.
- Kamu dapat menggunakan _SplitChunksPlugin_ untuk secara otomatis memisahkan dependensi seperti React ke dalam chunk terpisah.
- Sementara itu, dengan _entry dependencies_, kamu bisa memutuskan bahwa Axios hanya dimuat pada halaman tertentu jika tidak diperlukan di halaman lain.
