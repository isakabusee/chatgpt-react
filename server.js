const PORT = 8000
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = "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"

app.post('/completions', (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorizations": `Bearer ${ API_KEY }`,
        }
    }
    try {
        fetch("https://api.openai.com/v1/chat/completions", options)


    } catch(error) {

        console.log(error)
    }

})

app.listen(PORT, () => console.log('Server is running on PORT ' + PORT))