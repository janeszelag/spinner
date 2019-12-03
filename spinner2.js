let spinnerArray = ['\r|   ', '\r/   ', '\r-   ','\r\\   ', '\r|   ', '\r/   ', '\r-   ','\r\\   ', '\n' ];
  
for (let index in spinnerArray) {
      setTimeout(() => {
        process.stdout.write(spinnerArray[index])
      }, 100 + 200 * index);
  }









