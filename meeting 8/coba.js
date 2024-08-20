class Hewan {
    constructor(nama, kaki) {
      this.nama = nama;
      this.kaki = kaki;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  }
  
  // class Hewan mewarisi class Kucing
  class Kucing extends Hewan {
    constructor(nama, kaki, makanan) {
      super(nama, kaki);
      this.makanan = makanan;
    }
  
    mencuri() {
      return `${this.nama} mencuri ${this.makanan}`;
    }
  }
  
  // membuat objek dari class Kucing
  let kucing = new Kucing("Tom", 4, "ikan");
  console.log(kucing.nama);
  console.log(kucing.tidur());
  console.log(kucing.mencuri());