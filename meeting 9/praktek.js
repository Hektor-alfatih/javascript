// Praktek skilvul 1

// Buat kode kamu di bawah ini

class Pelajar {
    constructor(nama, sekolah) {
        var _nama = nama;
        var _sekolah = sekolah;

        this.setNama = function (nama) {
            _nama = nama;
        };

        this.setSekolah = function (sekolah) {
            _sekolah = sekolah;
        };

        this.getNama = function () {
            return _nama;
        }

        this.getSekolah = function () {
            return _sekolah;
        }
    }

    belajar() {
        return `${this.getNama()} belajar di ${this.getSekolah()}`
    }
}

let pelajar = new Pelajar ("Alpha", "Skilvul")
console.log(pelajar.belajar())


// Praktek skilvul 2



// Buat kode kamu di bawah ini

class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        var hasil = this.panjang * this.lebar;
        return hasil;
    }

    keliling() {
        var hasil = 2 * (this.panjang + this.lebar);
        return hasil;
    }
}

let persegiPanjang = new PersegiPanjang (4, 3)
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());


//praktek 1

class Mobil {
    constructor(merk, tahun) {
        var _merk = merk;
        var _tahun = tahun;

        // getter
        this.getMerk = function() {
            return _merk;
        }
        this.getTahun = function() {
            return _tahun;
        }

        // Setter
        this.setMerk =  function (Merk) {
            _merk = Merk;
        }
        this.setTahun =  function (Tahun) {
            _tahun = Tahun;
        }
    }

    spek() {
        return `mobil ${this.getMerk()} tahun ${this.getTahun()}`
    }
}

let pabrik = new Mobil("Avanza", 2008);
  console.log(pabrik.spek())

// Praktek 2

class Pesawat {
    constructor(jenis, kecepatan) {
        this._jenis = jenis;
        this._kecepatan = kecepatan;
    }

    terbang() {
        return `Pesawat ${_jenis} dengan kecepatan terbang ${this._kecepatan}`
    }
}

class Jet extends Pesawat {
    constructor(jenis, kecepatan, kapasitasbahanbakar) {
        super(jenis, kecepatan);
        this._kapasitasbahanbakar = kapasitasbahanbakar;
    }

    isibahanbakar() {
        return `Pesawat ${this._jenis} dengan kecepatan terbang ${this._kecepatan} dan kapasitas bahan bakar sebesar ${this._kapasitasbahanbakar}`
    }
}

let pesawatjet = new Jet("jet", "500 hingga 700 km/jam", "810 liters");
  console.log(pesawatjet.isibahanbakar())


//   Praktek 3

class Karyawan {
    constructor(nama, gaji, jabatan) {
        var _nama = nama;
        var _gaji = gaji;
        var _jabatan = jabatan;
     
        
          // getter
          this.getNama = function() {
            return _nama;
        }
          this.getGaji = function() {
            return _gaji;
        }
          this.getJabatan = function() {
            return _jabatan;
        }


         // Setter
         this.setNama =  function (Nama) {
            _nama = Nama;
        }
         this.setGaji =  function (Gaji) {
            _gaji = Gaji;
        }
         this.setJabatan =  function (Jabatan) {
            _jabatan = Jabatan;
        }
    }
}


class Manajer extends Karyawan {
    
    constructor(nama, gaji, jabatan, tunjangan) {
        super(nama, gaji, jabatan);
        var _tunjangan = tunjangan;

        // getter
        this.getTunjangan = function() {
            return _tunjangan;
        }
    }

    beritunjangan() {
        return `Pak ${this.getNama()} mendapatkan gaji sebesar ${this.getGaji()} saat ia menjadi ${this.getJabatan()} dan di beri tunjangan sebesar ${this.getTunjangan()}`
    }

}

let akhir = new Manajer("Budi", 30000000, "manajer", 20000000)
console.log(akhir.beritunjangan());



// Praktek 4

class Kendaraan {
    constructor() {
        this._kecepatan = 0;

        // getter
        this.getKecepatan = function() {
            return this._kecepatan;
        }

        // Setter
        this.setKecepatan =  function (value) {
            if (value < 0) {
                console.log("Kecepatan tidak bisa kurang dari 0. Nilai kecepatan tetap:", this._kecepatan);
        } else {
            this._kecepatan = value;
        
            }
        }
    }
}


let mobil = new Kendaraan();

// Mengatur kecepatan menjadi 100
mobil.setKecepatan(100);
console.log("Kecepatan setelah diatur ke 100:", mobil.getKecepatan());

// Mencoba mengatur kecepatan menjadi -50
mobil.setKecepatan(-50);
console.log("Kecepatan setelah mencoba diatur ke -50:", mobil.getKecepatan());


// praktek 5

class akunBank {
    constructor(saldo, setoran) {
      var _saldo = saldo;
      var _setoran = setoran;

      this.setSaldo = function (saldo) {
        _saldo = saldo;
      };
  
      this.setSetoran = function (setoran) {
        _setoran = setoran;
      };

  
      this.getSetoran = function () {
        return _setoran;
      };

      this.getSaldo = function () {
        if (_saldo < 0) {
          return (saldo = Null);
        } else {
          return (_saldo = saldo + setoran);
        }
      };
    }
  } 
  
  let akun1 = new akunBank(1000, 2000);
  console.log(akun1.getSaldo());

// Praktek 6

class karyawan2 {
    constructor(nama, gaji) {
      var _nama = nama;
      var _gaji = gaji;
  
      this.setnama = function (nama) {
        _nama = nama;
      };
  
      this.setgaji = function (gaji) {
        _gaji = gaji;
      };
  
      this.getnama = function () {
        return _nama;
      };
  
      this.getgaji = function () {
        return _gaji;
      };
    }
  }
  
  class manajer2 extends karyawan2 {
    constructor(nama, gaji) {
      super(nama, gaji);
    }
    laporan() {
      return `Manajer ${this.getnama()} diberi gaji sebesar ${this.getgaji()} Rupiah`;
    }
  }
  
  let karyawan3 = new manajer2("hektor", 5000000);
  console.log(karyawan3.laporan());
