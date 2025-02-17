console.log('Web Serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data)
    }
});
//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2: Session code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code 
// app.get("/hello",function(req , res){
//     res.end(`<h1>HELLO WORLD by Muhammad</h1>`)
// });

// app.get("/gift",function(req , res){
//     res.end(`<h1>Siz sovgalar bulimidasiz</h1>`)
// });

// app.get("/",function(req , res){
//     res.render(`project`)
// });

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/", function(req , res){
    res.render("harid");
});

app.get('/author', (req , res) => {
    res.render("author",{user: user})
})


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function(){
    console.log(`The server is running succesfully on port: ${PORT}`)
});
