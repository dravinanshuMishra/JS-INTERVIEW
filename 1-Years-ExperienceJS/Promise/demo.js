const cart = ["shirt", "pant", "kurta"];

// Simulating an asynchronous operation that resolves after a delay
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = Math.random() < 0.5 ? { message: "Success!" } : null; // Simulating success or failure
        if (data) {
          resolve(data); // Resolve the Promise with the data
        } else {
          reject(new Error("Failed to fetch data")); // Reject the Promise with an error
        }
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Using the Promise
  fetchData()
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  
