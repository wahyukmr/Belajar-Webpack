<h2>Module Bundler</h2>

Module bundler digunakan untuk mengambil code-code JavaScript yang digunakan (beserta dengan dependensinya atau suatu library yang bergantung dengan library lain) dan mem-bundel / menggabungkannya menjadi sebuah file. Bahkan ia juga dapat melakukan minify / uglify terhadap file agar ukurannya menjadi semakin kecil.

Beberapa macam _module bundler_ diantaranya adalah:

- [Browserify](https://browserify.org)
- [Webpack](https://webpack.js.org)
- [Rollup](https://rollupjs.org)
- [Parcel](https://parceljs.org)
- [Snowpack](https://www.snowpack.dev)
- [Vite](https://vitejs.dev/)

<h2>Webpack</h2>

**Webpack** adalah sebuah bundler untuk aplikasi web yang memungkinkan untuk mengelola dan menggabungkan berbagai aset seperti JavaScript, CSS, gambar, dan lainnya menjadi satu atau beberapa file output yang efisien.

**Ilustrasi Sederhana:** Bayangkan ketika sedang membangun sebuah rumah. Dalam proses ini, kita memiliki berbagai material: kayu untuk dinding, batu untuk fondasi, kabel listrik, pipa air, dan sebagainya. Masing-masing material ini berada di tempat terpisah dan mungkin berasal dari pemasok yang berbeda. Namun, untuk membangun rumah yang solid dan terstruktur dengan baik, kita perlu mengumpulkan semua material tersebut dan menyusunnya menjadi sebuah bangunan yang terorganisir.

Webpack bertindak seperti seorang kontraktor bangunan yang mengumpulkan semua material dari berbagai tempat (JavaScript, CSS, gambar, dll.) dan menyatukannya ke dalam sebuah rumah yang utuh (file output yang terbundle).

Webpack memiliki beberapa fitur yang dapat digunakan, seperti:

- **_Dependency management_**: memudahkan pengelolaan library yang diperlukan dalam aplikasi.
- **_Hot module replacement_**: tidak melakukan bundling seluruh modul, melainkan hanya akan membundle module yang dibutuhkan saja.
- **_Caching_**: untuk meningkatkan kecepatan.
- **_Supported modules_**: ES Modules, CommonJS, AMD Modules.
- **_Transpile Older JS_**: mengonversi file modern JavaScript agar bisa dijalankan di browser lama.
- **_Bundle CSS & Images_**: membundle kode css dan atau images secara terpisah atau digabungkan ke dalam JS.
- **_Asset Optimization_**: mengkompresi atau memperkecil ukuran gambar.

Namun, webpack tetap memiliki kelemahannya sendiri dibandingkan dengan module bundler lain, yaitu terkait dengan kecepatannya dalam melakukan proses build. Semakin besar resource maka semakin lama pula waktu build-nya.

Beberapa komponen konfigurasi webpack:

1. **Entry**: Titik masuk utama aplikasi.
   ```javascript
   entry: "./src/index.js";
   ```
2. **Output**: Menentukan di mana dan bagaimana file hasil bundle akan disimpan. Serta bisa mengatur nama file output dan lokasi direktori.
   ```javascript
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
   ```
3. **Loaders**: untuk memproses file non-JavaScript (misalnya, CSS, gambar) dan mengubahnya menjadi modul yang bisa di-bundle oleh Webpack.
   ```javascript
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ["style-loader", "css-loader"],
       },
     ];
   }
   ```
4. **Plugins**: Menyediakan fungsionalitas tambahan seperti optimasi, manajemen aset, dan injeksi variabel ke dalam kode.
   ```javascript
   plugins: [
     new HtmlWebpackPlugin({
       template: "./src/index.html",
     }),
   ];
   ```
5. **Mode**: Menentukan mode build, bisa `development`, `production`, atau `none`. Mode ini memengaruhi bagaimana Webpack mengoptimalkan output.
   ```javascript
   mode: "development";
   ```
