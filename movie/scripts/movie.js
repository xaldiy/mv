console.log('Always love Adinda');

function toggleDescription() {
    var descriptionSection = document.querySelector('.description');
    var showButton = document.querySelector('.show-button');
    var hideButton = document.querySelector('.hide-button');

    descriptionSection.classList.toggle('show');
    showButton.style.display = descriptionSection.classList.contains('show') ? 'none' : 'block';
    hideButton.style.display = descriptionSection.classList.contains('show') ? 'block' : 'none';
}

// Mencegah klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('✋');
});

// Mencegah kombinasi tombol keyboard (CTRL+C, CTRL+X, CTRL+V, CTRL+SHIFT+V)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 86)) || (e.ctrlKey && e.shiftKey && (e.keyCode === 86))) {
        e.preventDefault();
        alert('✋');
    } else if (e.ctrlKey) {
        e.preventDefault();
        alert('✋');
    }
});

// Mencegah tombol "i" pada keyboard
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 73) { // Untuk huruf kecil "i"
        e.preventDefault();
        alert('✋');
    } else if (e.keyCode === 105) { // Untuk huruf besar "I"
        e.preventDefault();
        alert('✋');
    }
});

// Mendeteksi saat teks disalin
document.addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', '✋');
    e.preventDefault();
    alert('✋');
});

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
