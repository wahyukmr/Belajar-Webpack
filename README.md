<h1>Loaders</h1>

Loaders memungkinkan untuk melakukan bundling ke semua sumber daya statis diluar JavaScript. Dengan kata lain, memungkinkan hasil bundling tidak hanya berisi JavaScript saja dan dapat mengurangi banyak request karena semua dapat disatukan dalam file bundle. Pilihan loaders yang dapat digunakan bisa mengunjungi url berikut: [loaders](https://webpack.js.org/loaders/).

Misalnya ketika ingin membundle file css bersama dengan kode javascript sebelumnya, maka dapat dilakukan dengan cara berikut:

- install package `style-loader` dan `css-loader`.
- Perbarui file configurasi webpack dengan menabahkan kode berikut:

  ```javascript
  module.exports = {
    // kode lainnya...

    module: {
      rules: [
        {
          // untuk mengecek atau menguji ekstensi file yang dimasukkan
          test: /\.css$/i,
          // penting untuk memperhatikan urutan dan menempatkan `style-loader` di index pertama, karena webpack selalu membaca loader dari kanan ke kiri.
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
  ```

> Keterangan:
>
> `css-loader` untuk membundle file css agar masuk ke file hasil bundle-nya.
>
> `style-loader` untuk menerapkan style-nya ke DOM.

<h3>Bable Loader</h3>

Bable loader digunakan agar hasil file bundler bisa di support oleh browser versi lama.
