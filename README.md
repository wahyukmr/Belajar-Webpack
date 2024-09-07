<h1>Caching, Plugins & Tools</h1>

<h2>Cache</h2>

Merupakan sebuah teknik untuk menyimpan data di dalam komponen haedware atau software, yang dilakukan agar _request_ (berikutnya) untuk data tersebut terjadi dengan lebih cepat. Dengan kata lain memungkinkan website untuk memuat lebih cepat dengan trafik network yang lebih kecil. Namun ketika menggunakan cache ada hal yang perlu diperhatikan jika ada perubahan pada kode yang di bundle. Dikarenakan ketika ada perubahan kode yang di bundle, nama filenya tetap sama. Sehingga akan membuat browser mengambil data dari cache-nya, yang akan membuat halaman tidak berubah. Solusinya harus melakukan _Hard Refresh_ (ctrl + shift + r).

Namun webpack mempunyai cara untuk mengatasi masalah di atas, salah satunya dengan mengubah nama file outputnya dengan menyisipkan `[contenthash]`. Sehingga ketika di dalam file bundle ada perubahan, browser jadi tahu ini bukan file yang sama seperti file sebelumnya. Dikarenakan cara ini akan membuat nama filenya unik, kita juga perlu mengatur path ke file bundle ini dibuat secara otomatis agar sript HTML dapat memiliki jalur yang benar ke file bundle terbaru. Caranya dengan membuat file HTML secara otomatis dibuat oleh webpack, hal ini juga berlaku untuk link script-nya. Hal ini dapat dilakukan oleh webpack dengan bantuan **Plugins**.

Untuk menangani masalah di atas, plugin `HtmlWebpackPlugin` dapat digunakan dalam kasus ini. Plugin ini akan membuatkan file HTML juga akan ikut di bundle dan secara otomatis akan menautkan link ke script yang unik tadi. Namun kita masih perlu membuat file template untuk menyimpan kode file HTML sebelumnya agar dapat dimasukkan ke file HTML bundle.

Pada saat melakukan perubahan pada kode, webpack akan secara otomatis membuatkan file hasil bundle terbaru dengan hash yang berbeda pula. Cara membersihkan file hasil bundle yang lama dengan cara menambahkan property dan value `clean: true` dalam property `output`.

<h2>Membuat Config di Mode yang Berbeda</h2>

Webpack Merge: untuk menggabungkan konfigurasi yang berbeda.
