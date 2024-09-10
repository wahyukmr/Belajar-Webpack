<h1>Code Splitting</h1>

_Code Splitting_ adalah teknik untuk memecah bundel kode menjadi bagian-bagian yang lebih kecil, sehingga kode hanya dimuat saat dibutuhkan, meningkatkan performa aplikasi. Webpack mendukung tiga pendekatan umum untuk pemisahan kode yang tersedia: **entry point**, **dynamic import**, dan **Prevent Duplication**. Berikut adalah penjelasannya:

- Entry Point Splitting

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

- Prevent Duplication

  Jika mempunyai multiple entries dan setiap file JavaScript yang menjadi entry terhubung ke sebuah library yang sama, hal ini akan membuat setiap file JS tersebut akan memiliki duplikasi kode library yang digunakan.

  Webpack menyediakan `SplitChunksPlugin`, `SplitChunksPlugin` adalah fitur Webpack yang memungkinkan untuk mengekstrak dependencies yang umum/sama ke entry chunk (memecah/membagi kode menjadi beberapa file kecil) yang ada atau potongan yang baru. Tujuannya adalah agar browser tidak perlu memuat semua kode dalam satu bundel besar sekaligus. Ini membuat halaman bisa dimuat lebih cepat karena hanya bagian yang dibutuhkan saja yang diambil oleh browser.

  Bayangkan kamu punya satu file besar yang berisi semua kode aplikasi. Saat pengguna membuka aplikasi, browser harus memuat seluruh file, meskipun banyak kode di dalamnya mungkin tidak dibutuhkan saat itu. Dengan `SplitChunksPlugin`, kode yang jarang digunakan atau library besar bisa dipisahkan menjadi file yang lebih kecil. File ini hanya akan dimuat saat benar-benar dibutuhkan.

  Fitur ini bekerja dengan aturan-aturan tertentu yang bisa kamu sesuaikan. Misalnya:

  - [ ] Memisahkan library dari `node_modules`: Kode yang berasal dari `node_modules` seperti React atau lodash sering kali besar, jadi Webpack bisa memisahkannya ke dalam file `vendors.js`.
  - [ ] Memisahkan file berdasarkan ukuran: Jika ada file yang terlalu besar, Webpack akan memecahnya menjadi beberapa bagian.

  Contoh:

  Misalnya kamu punya aplikasi yang menggunakan library seperti react, dan kamu juga punya kode khusus aplikasi sendiri. Dengan `SplitChunksPlugin`, Webpack bisa membuat dua file:

  - [ ] `vendors.js `(berisi kode dari node_modules seperti react).
  - [ ] `main.js` (berisi kode aplikasi kamu sendiri).

  Jadi ketika aplikasi dijalankan, browser akan memuat `vendors.js` sekali, dan akan menggunakan cache sehingga tidak perlu memuatnya lagi di masa mendatang.

  Contoh Konfigurasi SplitChunks:

  ```javascript
  module.exports = {
    optimization: {
      splitChunks: {
        chunks: "all", // Ini memberitahu Webpack untuk memecah semua jenis kode
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/, // Pisahkan kode dari node_modules
            name: "vendors", // Nama untuk file yang dipisahkan
            chunks: "all",
          },
        },
      },
    },
  };
  ```

  Penjelasan:

  `chunks: 'all'`: Memecah kode dari semua jenis sumber (baik kode yang kita tulis sendiri atau library).

  `cacheGroups`: Aturan khusus untuk memisahkan grup kode tertentu.

  `test`: Regex untuk mendeteksi file mana yang akan dipisah. Dalam contoh ini, semua yang ada di `node_modules` akan dipisah.

  `name`: Nama untuk file yang dipisahkan, seperti `vendors.js`.
