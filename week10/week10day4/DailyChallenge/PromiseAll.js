function promiseAll(promises) {
    return Promise.all(promises)
      .then(values => values)
      .catch(error => {
        console.error("At least one promise was rejected:", error);
        return [];
      });
  }
  
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
  });
  
  promiseAll([promise1, promise2, promise3])
    .then(result => console.log(result))
    .catch(error => console.error(error));