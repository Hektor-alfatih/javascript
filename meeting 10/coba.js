// Fungsi untuk registrasi pengguna
function registerUser(name, userType) {
    if (userType === "VIP") {
        return `Welcome VIP, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

// Memanggil fungsi registerUser
let result1 = registerUser("Nina", "VIP");
console.log(result1);  // Output: Welcome VIP, Nina!

// Fungsi untuk menghitung diskon berdasarkan jenis pengguna
function applyDiscount(userType, purchaseAmount) {
    let discount;
    
    if (userType === "VIP") {
        discount = 20;
    } else {
        discount = 10;
    }
    
    let totalAfterDiscount = purchaseAmount - (purchaseAmount * discount / 100);
    return totalAfterDiscount;
}

// Memanggil fungsi applyDiscount untuk VIP
let result2 = applyDiscount("VIP", 200);
console.log(result2);  // Output: 160

// Memanggil fungsi applyDiscount untuk NON VIP
let result3 = applyDiscount("NON VIP", 100);
console.log(result3);  // Output: 90
