<h1>Webpack Custom Configuration</h1>

> Menjalankan perintah build ulang dilakukan hanya ketika terjadi perubahan pada file configurasi saja (di file `werbpack.config.js`).

<h3>Custom configuration file</h3>

Misalkan ketika ingin mengganti file default config dari `werbpack.config.js` menjadi `mywebpack.config.js`. Hal itu dapat dilakukan dengan:

1. Membuat file `mywebpack.config.js`.
2. Perbarui file `package.json`:

   ```json
   "scripts": {
      "build": "webpack --config mywebpack.config.js"
    },
   ```

<h3>Custom Hasil Bundle</h3>

Kita dapat mengganti nama file dan atau lokasi dari hasil bundling. Caranya dapat dilakukan dengan memperbarui file `werbpack.config.js` dengan menambahkan property berikut:

```javascript
module.exports = {
  // Kode lain...

  // custom hasil bundle
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
};
```

> Keterangan:
>
> Property `path` untuk menentukan lokasi penyimpanan file bundle. Argumen pertama yaitu `__dirname` agar relative terhadap direktori kita. argumen kedua adalah nama folder yang diinginkan.
>
> Property `filename` untuk menentukan nama file yang diinginkan.

<h3>Bundle Otomatis</h3>

Webpack dapat melihat perubahan pada kode dan secara otomatis melakukan bundle ulang. Hal ini dapat diterapkan dengan 2 cara berikut:

1. Memperbarui file `package.json`:

   ```json
   "scripts": {
      "build": "webpack",
      "watch": "webpack --watch"
    },
   ```

2. Memperbarui file `werbpack.config.js` dengan menambahkan property berikut:

   ```javascript
   module.exports = {
     // Kode lain...

     // otomatis membundle ulang jika ada perubahan
     watch: true,
   };
   ```

<h3>Membaca Kode Hasil Bundle</h3>

Ketika ingin memudahkan dalam membaca kode hasil bundling selama di mode "development" (menghilangkan fungsi `eval()`), dapat dilakukan dengan menambahkan property berikut dalam file `werbpack.config.js`:

```javascript
module.exports = {
  // Kode lain...

  devtool: false,
};
```

> Ketika masuk ke mode "production" property `devtool` dapat dihapus.
