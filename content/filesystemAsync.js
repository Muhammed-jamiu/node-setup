const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  //here we are reading the file
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    //here we are wrting/creating another file
    writeFile(
      "./content/result-async.txt",
      "Hello! Welcome Sir",
      (error, result) => {
        console.log(error);
        return;
      }
    );
    console.log(result);
  });
});

//problem section
fs.readFile("./", (err, files) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Result", files);
  }
});
