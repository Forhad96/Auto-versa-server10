const express = require('express');
const cors = require('cors');
const app = express()

const port = process.env.PORT || 7001

// Middleware 
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("AutoVarsa server is Running")
})

app.listen(port,()=>{
    console.log(`AutoVarsa server running on port:${port}`);
})