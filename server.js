// import { timeStamp } from 'node:console';
// import http from 'node:http'; // Use 'node:http' for native modules
// import { json } from 'express';

// const currentTime = new Date();
// const hours = currentTime.getHours();
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();
// const milliseconds = currentTime.getMilliseconds();

// const server = http.createServer((req, res) => {
//     // The (req, res) parameters are correctly passed to this function.
//     // res is defined here and has the .end() method.


//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to the Root Path');
//     }
//     else if (req.url === '/me') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.json({
//             status: "success",
//             user: {
//                 "email": "emzzyoluwole@gmail.com",
//                 "name": "Dynasty",
//                 "stack": "nodejs"
//             },
//             "timeStamp": `${hours}:${minutes}:${seconds}:${milliseconds}`,
//             "fact": "A random cat fact from Cat Facts API"
//         })
//         // res.end("Welcome to MY Profile, I am daaaaaaaaaaaaaaaaaaaa best in the world!!!!!")
//     }
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

// const PORT = 8000;
// server.listen(PORT, () => {


//     console.log("Full Date Object:", currentTime);

//     console.log(`Server is listening on port ${PORT}`);
// });


import express, { json } from "express";
import cors from "cors"
import * as dotenv from "dotenv";

dotenv.config()

const app = express()
// const PORT = process.env.PORT
const PORT = process.env.PORT

const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const milliseconds = currentTime.getMilliseconds();

const CAT_FACT_API_URL = "https://catfact.ninja/fact";

// const getACatFact 



app.use(express.json());

app.use(cors());
app.use(express.json())

try {
    // mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected!!!");
} catch (error) {
    console.log(error)
}

app.listen(PORT || 8000, () => {
    console.log(`Server running on port ${PORT}`)
});

app.get("/", async (req, res) => {
    res.status(200).send("Welcome to the Root Path")
})

app.get("/test-cats", async (req, res) => {
    console.log("Received request for a cat fact....")

    try {
        const response = await fetch(CAT_FACT_API_URL);

        if (!response.ok) {
            console.error("External API Error: Status" + response.status);
            return res.status(502).json({
                error: "Failed to retrieve data from the external source.",
                status: response.status
            });
        }

        const catFactData = await response.json();
        res.json(catFactData)
    } catch (error) {
        console.error("An error occurred while trying to get a cat fact." + error.message);
        res.status(500).json({
            error: "There was a server error while fetching a cat fact."
        })
    }
})

// app.get("/me", async (req, res) => {
//     // res.status(200).send("Welcome to the ME Endpoint")
//     res.status(200).json({
//         status: "success",
//         user: {
//             "email": "emzzyoluwole@gmail.com",
//             "stack": "Node.js/Express"
//         },
//         timestamp: `${hours}:${minutes}:${seconds}:${milliseconds}`,
//         fact: "A random cat fact from Cat Facts API"
//     })
//     console.log("Welcome to the ME Endpoint and its time to learn a whole lot about me")
// })

app.get("/me", async (req, res) => {

    try {
        const response = await fetch(CAT_FACT_API_URL);

        if (!response.ok) {
            console.error("There was an External API Error with status: " + error.message);
            return res.status(502).json({
                error: "Failed t retrieve data from the external API",
                status: response.status
            });
        }
        const catFactData = await response.json();
        // res.json(catFactData);
        res.status(200).json({
            status: "success",
            user: {
                "email": "emzzyoluwole@gmail.com",
                "name": "Mojiboye Emmanuel Oluwole",
                "stack": "Node.js/Express"
            },
            timestamp: `${hours}:${minutes}:${seconds}:${milliseconds}`,
            fact: catFactData
        })
    } catch (error) {
        console.error("An error occurred while trying to get a cat fact." + error.message);
        res.status(500).json({
            error: "There was a server error while fetching a cat fact."
        })

    }
    // res.status(200).json({
    //     status: "success",
    //     user: {
    //         "email": "emzzyoluwole@gmail.com",
    //         "stack": "Node.js/Express"
    //     },
    //     timestamp: `${hours}:${minutes}:${seconds}:${milliseconds}`,
    //     fact: catFactData
    // })
})

// user: {
//                 "email": "emzzyoluwole@gmail.com",
//                 "name": "Dynasty",
//                 "stack": "nodejs"
//             },
//             "timeStamp": `${hours}:${minutes}:${seconds}:${milliseconds}`,
//             "fact": "A random cat fact from Cat Facts API"
//         
