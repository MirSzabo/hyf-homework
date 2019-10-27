function resolvePromise(resolveAfter){
  return new Promise(() => {
    setTimeout(() => {
      console.log("I am called asynchronously");
    }, resolveAfter * 1000);
  });
}

resolvePromise(6);