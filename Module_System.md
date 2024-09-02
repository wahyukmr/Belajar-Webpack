<h1>Module System?</h1>

Module system dapat memberikan beberapa hal berikut:

- Reusability: module bisa digunakan kembali oleh bagian program lain tanpa harus menulis ulang atau menjadi package untuk aplikasi lain.
- Isolation: satu module hanya mengerjakan satu hal spesifik saja.
- Organization: dapat mempermudah pengelolaan aplikasi.

Module system di JavaScript yang terbaru ada 2:

1. CommonJS:

   Merupakan sistem module yang dipopulerkan oleh Node.js yang berjalan di sisi server. Untuk membuat CommonJS berjalan di sisi client (browser) perlu menggunakan **Module Bundler** agar kodenya dapat di convert atau dibundle dalam satu file JavaScript yang dipanggil di file html.

   Cara penggunaannya untuk mengeksport module perlu menggunakan keyword `module.exports` dan dapat di import menggunakan keyword `require()`.

   Contohnya:

   ```javascript
   // Mengeksport fungsi getUser dari file `users.js` agar dapat digunakan di file lain.
   const users = ["aku", "kamu"];

   function getUser() {
     return users;
   }

   module.exports = getUser;

   // mengimport fungsi getUser dari file `users.js` agar dapat digunakan di file yang memerlukan fungsi tersebut
   const getUser = require("./users");

   getUser();
   ```

2. ES6 Modules :

   Digunakan dari 2015 sampai sekarang (2024). modulenya dapat diterapkan tanpa harus menggunakan bantuan dari pihak ketiga atau aplikasi lain karena sudah dari JavaScript nya langsung. Dengan module ini tidak memerlukan module bundler untuk bisa berjalan di browser, sebagai gantinya tambahkan `type="module"` saat pemanggilan script nya di html.

   Cara penggunaannya untuk mengeksport module perlu menggunakan keyword `exports` dan dapat di import menggunakan keyword `import`.

   Module ini berjalan secara asynchronous, sedangkan CommonJS secara synchronous.

   Contohnya:

   ```javascript
   // Mengeksport fungsi getUser dari file `users.js` agar dapat digunakan di file lain.
   const users = ["aku", "kamu"];

   export function getUser() {
     return users;
   }

   // mengimport fungsi getUser dari file `users.js` agar dapat digunakan di file yang memerlukan fungsi tersebut
   import { getUser } from "./users";

   getUser();
   ```

Lalu, jika menggunakan ES6 Module saja sudah dapat digunakan tanpa memerlukan module bandler. Apakah module bundler dapat sepenuhnya tidak digunakan? cari tahu jawabannya ➡️
