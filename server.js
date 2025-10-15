import http from 'node:http'; // Use 'node:http' for native modules

const server = http.createServer((req, res) => {
  // The (req, res) parameters are correctly passed to this function.
  // res is defined here and has the .end() method.
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Root Path');
  } 
  else if (req.url === '/me') {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end("Welcome to MY Profile, I am daaaaaaaaaaaaaaaaaaaa best in the world!!!!!")
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




// // import node from "node";
// import http from "node:http"
// import express from "express";
// import cors from "cors"

// const app = express()
// // const PORT = process.env.PORT
// const PORT = 8000

// app.use(express.json());

// app.use(cors());

// try {
//     // mongoose.connect(process.env.MONGO_URI)
//     console.log("Database Connected!!!");
// } catch (error) {
//     console.log(error)
// }

// app.listen(PORT, async (req, res) => {
//     res.end("Welcome to the Root Path")
//     console.log(`Server running on port ${PORT}`)
// });

// app.get("/me", async (req, res) => {
//     res.end("Welcome to the ME Endpoint")
//     console.log("Welcome to the ME Endpoint and its time to learn a whole lot about me")
// })

