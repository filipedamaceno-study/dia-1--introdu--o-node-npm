const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////
// FILES
// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${new Date().toDateString()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("File written!");

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf8", (err, text) => {
// if (err) throw err;
// console.log("ERROR!");

//   fs.readFile(`./txt/${text}.txt`, "utf8", (err, text2) => {
//     console.log(text2);
//     fs.readFile("./txt/append.txt", "utf8", (err, text3) => {
//       console.log(text3);
//       fs.writeFile("./txt/final.txt", `${text2}\n${text3}`, "utf8", (err) => {
//         console.log("Your file has been written!");
//       });
//     });
//   });
// });
// console.log("Will read file!");
////////////////////////////////////////

////////////////////////////////////////
// SERVER
// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   if (pathName === "/" || pathName === "/overview") {
//     res.end("This is the OVERVIEW");
//   } else if (pathName === "/product") {
//     res.end("This is the PRODUCT");
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h1>Page not found!</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });
////////////////////////////////////////

////////////////////////////////////////
// API
// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,
//   "utf8"
// );

// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,
//   "utf8"
// );

// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,
//   "utf8"
// );

// // O 'g' significa global, ou seja, substituir todas as ocorrências
// const replaceTemplate = (temp, product) => {
//   let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
//   output = output.replace(/{%DESCRIPTION%}/g, product.description);
//   output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//   output = output.replace(/{%QUANTITY%}/g, product.quantity);
//   output = output.replace(/{%WHEREFROM%}/g, product.from);
//   output = output.replace(/{%PRICE%}/g, product.price);
//   output = output.replace(/{%ID%}/g, product.id);
//   output = output.replace(/{%IMAGE%}/g, product.image);

//   if (!product.organic)
//     output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
//   return output;
// };

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
// const dataObject = JSON.parse(data);

// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   // Overview page
//   if (pathName === "/" || pathName === "/overview") {
//     res.writeHead(200, {
//       "Content-type": "text/html",
//     });
//     const cardsHtml = dataObject
//       .map((el) => replaceTemplate(tempCard, el))
//       .join("");

//     const output = tempOverview.replace("{%PRODUCT_CARD%}", cardsHtml);
//     res.end(output);

//     // Product page
//   } else if (pathName === "/product") {
//     res.writeHead(200, {
//       "Content-type": "text/html",
//     });
//     res.end(tempProduct);

//     // API
//   } else if (pathName === "/API") {
//     res.writeHead(200, {
//       "Content-type": "application/json",
//     });
//     res.end(data);

//     // Not found
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//     });
//     res.end("<h1>Page not found!</h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });
