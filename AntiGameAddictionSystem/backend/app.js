require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


const userRouter = require('./router/user')
app.use('/user', userRouter)




//port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});



