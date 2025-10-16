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

const USER_PROFILE = {
    email: "emzzyoluwole@gmail.com",
    name: "Mojiboye Emmanuel Oluwole",
    stack: "Node.js/Express"
};

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
    console.log(`Received request for the /me profile endpoint at ${new Date().toISOString()}`)

    let dynamicFact = "Cat Fact API unavailable. Please check the network connection.";


    try {
        const response = await fetch(CAT_FACT_API_URL);

        if (!response.ok) {
            console.error(`There was an External API Error with status: ${response.status}`)
            return res.status(502).json({
                error: "Failed to retrieve data from the external API",
                status: response.status
            });
        }
        else {
            const catFactData = await response.json()
            dynamicFact = catFactData.fact
        }
    } catch (error) {
        console.error("An error occurred while trying to get a cat fact." + error.message);
    }

    const currentTimestamp = new Date().toISOString();

    res.status(200).json({
        status: "success",
        user: USER_PROFILE,
        timestamp: currentTimestamp,
        fact: dynamicFact
    })
})

app.listen(PORT || 8000, () => {
    console.log(`\nServer running on port ${PORT}`)
    console.log(`Test the /me endpoint at: http://localhost:${PORT}/me`)
});