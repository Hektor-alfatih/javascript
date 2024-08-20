// Tugas 1

var nilai = 85
var totalpertemuan = 10
var kehadiran = 30
var lulus = kehadiran / totalpertemuan * 100

if (nilai > 135) {
    console.log("kategori A")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }


}else if (nilai > 120) {
    console.log("Kategori B")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }


}else if (nilai >= 80) {
    console.log("kategori C")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }


}else if (nilai < 50) {
    console.log("TIDAK LULUS !!!!!")
    if (lulus >= 75) {
        console.log("Anda lulus")
    }else if (lulus < 75) {
        console.log("ANDA TIDAK LULUS")
    }
}



// Tugas 2

var pendaftaran = false
var pembayaran = true

if (pendaftaran === true) {
    if (pembayaran === true) {
        console.log("Dapat mengikuti kursus")
    }else {
        console.log("Tidak dapat mengikuti kursus")
    }
}else {
    console.log("Tidak dapat mengikuti kursus")
}