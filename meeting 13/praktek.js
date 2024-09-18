// praktek 1

let data = "Terambil";

const fetchdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data === 'Terambil') {
            resolve("data fatched")
        } else {
            reject("data not fatched")
        }
    }, 3000)
})

fetchdata
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


    // Praktek 2

    const numbers = [3, 7, 1, 6]
    const selectnumber = numbers[0];

    const checknumber = new Promise((resolve, reject) => {
      if (selectnumber > 5) {
        resolve("number too high")
      } else {
        reject("number too low")
      }
    })

    checknumber
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })


    // Praktek 3

    function fetchStep1() {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Step 1 Complete"), 1000);
        });
      }
      
      function fetchStep2() {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Step 2 Complete"), 2000);
        });
      }
      
      function fetchStep3() {
        return new Promise((resolve) => {
          setTimeout(() => resolve("Step 3 Complete"), 3000);
        });
      }
      

      Promise.all([fetchStep1(), fetchStep2(), fetchStep3()])
        .then((results) => {
          console.log(results);
        })
        .catch((error) => {
          console.log("Error:", error);
        });



        // Praktek 4

        const simulatetask = new Promise((resolve, reject) => {
          
          const duration = 2000;

          if (duration <= 2000) {
            resolve("Task success");
          } else if (duration > 2000) {
            reject("Task failed");
            
          }
        });


        simulatetask.then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          console.log("Task complated")
        })


        // Praktek 5

        const fetchdataA = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Data A")
          }, 1000)
        })

        const fetchdataB = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Data B")
          }, 2000)
        })

        Promise.all([fetchdataA, fetchdataB])
          .then((results) => {
            console.log(results)
          })
          .catch((error) => {
            console.log(error)
          })