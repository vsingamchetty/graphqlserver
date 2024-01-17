const express=require('express')
const colors=require('colors')
require('dotenv').config()
const cors=require('cors')
const {graphqlHTTP}=require('express-graphql')
const schema = require("./schema/schema")
const connectDB=require('./config/db')

const port =process.env.port || 5000;



const app=express()
app.use(cors())
connectDB()

app.use('/graphql',graphqlHTTP({
 schema,
 graphiql:process.env.NODE_ENV==='development'
}))

app.listen(port,console.log(`server running on port ${port}`))
