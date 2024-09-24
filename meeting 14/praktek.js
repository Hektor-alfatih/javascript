// // Praktek skilviul 1

// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }
  
  
//   async function messages() {
//     const msg = await helloWorld();
//     console.log(msg);
//   }
  
  
//   messages();



// //   Praktek skilviul 2

// function ambilDataUser() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         console.log(users);
//       });
//   }
  
//   ambilDataUser();


//   // Praktek 1

//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function simulateDelay() {
//     await delay(2000); 
//     return "Delay finished";
//   }

//   simulateDelay().then(console.log);



//   // Praktek 2

//   async function calculateDivision(a, b) {
//     try {
//       if (a === 0 || b === 0) {
//         throw new Error("Cannot divide by zero");
        
//       }
//       let result = a / b;
//       console.log(`Result: ${result}`);

//     } catch (error) {
//       console.log(`Error: ${error.message}`);
      
//   }
// }

// calculateDivision(10, 0); 
// calculateDivision(10, 2);


// Praktek 3


// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 1 Complete");
//     }, 1000);
//   })
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task 2 Complete");
//     }, 2000);
//   })
// }   
// async function performtasks() {
//   const result1 = await task1();
//   const result2 = await task2();

//   console.log(result1);
//   console.log(result2);
  
// }


// performtasks();


//  Praktek 4


// async function getuserprofile() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await response.json();

//     if (data.name === "Leanne Graham") {

//       console.log("User is Leanne Graham");
      
//     } else {
      
//       console.log("User is not Leanne Graham");

//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }


// getuserprofile(); 



// Praktek 5

async function getpostdetails() {
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (response.status !== 200) {

      console.log("Failed to fetch post");
      return;
    }

    const data = await response.json();
    console.log("post title:", data.title);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getpostdetails();


// praktek 6

async function chekpostavailabilty() {
  
  try {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (response.status !== 200) {
      console.log("Failed to fetch post");
      return;
    }

    const data = await response.json();

    if (data.userId > 5) {
      console.log("Post is available for user IDs greater than 5");
    } else {
      console.log("Post is not available for user IDs greater than 5");
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

chekpostavailabilty();