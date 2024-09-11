# Minimizer

Berupa plugins yang digunakan untuk membuat ukuran bundle menjadi semakin kecil di tahap _production_ (siap di deploy).

## CssMinimizerWebpackPlugin

Sebuah plugin untuk mengoptimalkan dan meminifikasi css. Hasil proses optimasi ini tidak akan terlalu besar dalam mengurangi ukuran css. Jika ingin mengoptimasi lebih jauh lagi kita bisa melakukan sesuatu yang disebut **[Purch](https://purgecss.com/plugins/webpack.html)** (teknik untuk menghilangkan css yang tidak digunakan).

## ImageMinimizerWebpackPlugin

Sebuah plugin untuk melakukan optimasi (mengkompres) ke semua gambar menggunakan tool yang disarankan.
