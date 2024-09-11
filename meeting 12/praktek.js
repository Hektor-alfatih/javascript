// Praktek skilvul 1
function mandi() {
    console.log("mandi")
    }
    
    function sarapan(callback) {
    console.log("Sarapan tertunda 3 detik")
    setTimeout(callback, 3000)
    }
    
    function berangkatSekolah() {
        console.log("Berangkat Sekolah")
    }
    
    mandi();
    sarapan(berangkatSekolah);

// Praktek 1

function printMassages() {
    console.log("Mulai");
    setTimeout(() => console.log("Selesai"), 20000)
    
}

printMassages()

// praktek 2

function printEverySecond() {
    const intervalId = setInterval(() => {
        console.log("Hello world");
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);
}

// Praktek 3

function greet(name, callback) {
    console.log(`Hello ${name}`);
    setTimeout (callback, 1000)
    
}


function sayGoodbye() {
    console.log("Goodbye");
}

greet("yewon", sayGoodbye)

// Praktek 4

function performTasks() {

    console.log("Tugas 1");

    setTimeout(() => console.log("Tugas 2"), 3000)

    setTimeout(() => console.log("Tugas 3"), 1000)
}


performTasks()



// Praktek 5

function performTasks(message, delay) {
    
    setTimeout(() => console.log(message), delay);
}

performTasks("Hello after delay", 2000)