console.log('Always love Adinda');

// Fungsi untuk membuka modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Tutup modal ketika pengguna mengklik di luar modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
