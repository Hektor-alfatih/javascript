// praktek 1

const umur = 6;
if (umur > 5) {
    console.log("bayar penuh");
} else if (umur >= 2 && umur < 5) {
    console.log("bayar setengah harga");
} else if (umur < 2) {
    console.log("tidak boleh masuk")
}


// praktek 2

const umur2 = 17;
if (umur2 >= 17) {
    console.log("anda sudah cukup umur untuk membuat SIM")
} else {
    console.log("belum cukup umur")
}


// praktek 3

    const angka = 0
    if (angka > 0) {
        console.log("Positif");
    } else if (angka < 0) {
        console.log("Negative");
    } else {
        console.log("Netral");
    }


    //praktek nomor 4
var x = -10
var y = 10

if (x > 0 && y > 0) {
    console.log("kanan atas");
} else if (x < 0 && y <0) {
    console.log("kiri bawah");
} else if (x > 0 && y <0) {
    console.log("kanan bawah");
} else if (x < 0 && y > 0) {
    console.log("kiri atas");
}

//praktek nomor 5 

const pembelian = 190
if (pembelian >=200 ) {
    console.log("Diskon 15% diterapkan");
   var discon = 0.15*pembelian
   var totalharga = pembelian-discon
   console.log(totalharga);

} else if (pembelian >=100 && pembelian <200) {
    console.log("Diskon 10% diterapkan");
    var discon2 = 0.10*pembelian
    var totalharga2 = pembelian-discon2
    console.log(totalharga2);

} else if (pembelian <100) {
    console.log("Tidak Mendapat Diskon");
}

    

    // Praktek 6

    const umur3 = 18;
    if (umur3 >= 18) {
        console.log("Registrasi berhasil")
    } else {
        console.log("Registrasi Gagal")

    }

