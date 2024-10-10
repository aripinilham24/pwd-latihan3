// fungsi untuk menampilkan promo hari ini menggunakan script
function tampilkanPromo() {
    let hari = new Date().getDay();
    let promo = "";

    if (hari === 0 || hari === 6) {
        promo = "Diskon 25% untuk semua level pedas!";
    } else {
        promo = "Beli 3 gratis 1 untuk seblak level 5.";
    }

    document.getElementById("promoMessage").innerHTML = promo;
}

// daftar menu seblak favorit beserta harga dan satatus diskon
let menuFavorit = [
    {
        nama: "Seblak Kerupuk",
        harga: 15000,
        diskon: true // diskon 25%
    },
    {
        nama: "Seblak Ceker",
        harga: 18000,
        diskon: false
    },
    {
        nama: "Seblak Kikil",
        harga: 20000,
        diskon: false
    },
    {
        nama: "Seblak Bakso",
        harga: 17000,
        diskon: true // diskon 25%
    }
];

let totalHargaSetelahDiskon = 0; // variabel global untuk menyimpan total harga

// fungsi menampilkan menu favorit dalam list
function tampilkanMenu() {
    let listMenu = document.getElementById("listMenu");
    let pilihMenu = document.getElementById("pilihMenu");

    // menghapus ;ist dan dropdown menu
    listMenu.innerHTML = "";
    pilihMenu.innerHTML = "";

    // menampilkan menu kedalam list dan dropdown
    menuFavorit.forEach(function (item, index) {
        //menambahkan ke list
        let li = document.createElement("li");
        li.textContent = `${item.nama} - Rp. ${item.harga}`;
        listMenu.appendChild(li);

        // menambah ke dropdown pilih menu
        let option = document.createElement("option");
        option.value = index; // menyimpan index sebagai value
        option.textContent = item.nama;
        pilihMenu.appendChild(option);
    })
}

// Fungsi untuk memeriksa jumlah pesanan dan menghitung total bayar
function cekPesanan() {
    let menuIndex = document.getElementById("pilihMenu").value;
    let jumlah = document.getElementById("inputJumlah").value;
    let hasil = '';
    let total = 0;

    // cek jumlah pesanan
    if(jumlah<1) {
        alert("Jumlah pesanan tidak boleh kurang dari satu.");
    }

    // Validasi jumlah pesanan
    if (jumlah > 20) {
    hasil = "Pesanan terlalu banyak! Maksimal 20 porsi.";
    } else if (jumlah >= 1 && jumlah <= 20) {
    let menuPilihan = menuFavorit[menuIndex];
    let hargaPerItem = menuPilihan.harga;
    // Cek apakah menu memiliki diskon
    if (menuPilihan.diskon) {
    hargaPerItem *= 0.75; // Diskon 25%
    }
    total = hargaPerItem * jumlah;
    totalHargaSetelahDiskon = total; // Simpan total harga setelah diskon untuk perhitungan kembalian
    hasil = `Pesanan Anda sebanyak ${jumlah} porsi ${menuPilihan.nama} telah diterima!`;
    document.getElementById("totalBayar").innerHTML = `Total yang harus dibayar: Rp ${total}`;
    } else {
    hasil = "Silakan masukkan jumlah pesanan yang valid.";
    document.getElementById("totalBayar").innerHTML = '';
    }
    document.getElementById("hasilPesanan").innerHTML = hasil;
    }
    // Fungsi untuk menghitung kembalian
    
    function hitungKembalian() {
    let uangBayar = document.getElementById("uangBayar").value;
    let kembalian = uangBayar - totalHargaSetelahDiskon;
    if (kembalian < 0) {
    document.getElementById("hasilKembalian").innerHTML = "Uang Anda kurang.";
    } else {
    document.getElementById("hasilKembalian").innerHTML = `Kembalian Anda: Rp ${kembalian}`;
    }
    }


