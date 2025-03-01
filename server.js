const http = require("http");
const mongodb = require("mongodb")
// const db = require("db")



let db;
const connectionString = "mongodb+srv://Muhammad:20070526Mm@cluster0.v42ip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
 (err, client) => {
    if (err) console.log("ERROR on connection MongoDB")
    else {
        console.log("MongoDb conection secced"); 
        // console.log(client);
        module.exports = client;
           
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`The server is running succesfully on port: ${PORT},http://localhost:${PORT}`)
        });
    }
});
// module.exports = db;



