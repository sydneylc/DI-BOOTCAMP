// EXERCISE 1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  // TESTING THAT OUT
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // EXERCISE 2
  const fourSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  fourSecondPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // EXERCISE 3
  const resolvedPromise = Promise.resolve(3);
  const rejectedPromise = Promise.reject("Boo!");
  
  resolvedPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  rejectedPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));