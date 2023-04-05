// script.js
var audioPlayer = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', function() {
  audioPlayer.play();
});

pauseButton.addEventListener('click', function() {
  audioPlayer.pause();
});

// Ambil elemen yang akan diatur tampilannya
var menu = document.getElementById('menu');

// Cek lebar layar saat halaman dimuat
window.onload = function() {
  if (window.innerWidth < 768) {
    // Jika lebar layar kurang dari 768px, tambahkan kelas CSS
    menu.classList.add('mobile-menu');
  } else {
    // Jika lebar layar lebih dari atau sama dengan 768px, hapus kelas CSS
    menu.classList.remove('mobile-menu');
  }
}

// Cek lebar layar saat layar diubah ukurannya
window.onresize = function() {
  if (window.innerWidth < 768) {
  }
}
