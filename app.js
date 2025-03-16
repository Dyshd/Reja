console.log('Web Serverni boshlash');
const express = require("express");
const res = require("express/lib/response");
const app = express();
// const fs = require("fs");/
const http = require("http");
const db = require("./server").db();
const mongodb = require("mongodb");

//MongoDB connect

//1 Kirish code
app.use(express.static("public")); //MiddleWare DP: public ochiqlanadi
app.use(express.json());  //MiddleWare DP: API
app.use(express.urlencoded({ extended: true })); //MiddleWare DP: Traditional API


//2: Session code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code 


app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops)
        res.json(data.ops[0]);
    });
    // res.json({test: "success"});
});
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "sucsess" });
        })

});

// app.post("/edit-item", (req, res) => {
//     const data = req.body;
//     console.log(data);
//     db.collection("plans").findOneAndUpdate(
//         { _id: new mongodb.ObjectId(id) },
//         { $set: { reja: data.new_input } },
//         function (err, data) {
//             res.json({ state: "sucsess" });
//         });
// })


app.post("/edit-item", (req, res) => {
    const { id, new_input } = req.body; // ✅ ID va yangi matnni olish
    if (!id || !new_input) {
        return res.status(400).json({ error: "ID yoki matn yetishmayapti" });
    }

    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(id) }, // ✅ IDni MongoDB formatiga o'tkazish
        { $set: { reja: new_input } },
        function (err, result) {
            if (err) {
                console.error("Update xatosi:", err);
                return res.status(500).json({ error: "Tahrirlashda xatolik yuz berdi" });
            }
            res.json({ state: "success", updatedItem: result });
        }
    );
});


app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar ochirildi" })
        })  

    }
})



// app.post("/delete-item", (req, res) => {
//     const id = req.body.id;
//     db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) },
//         function (err, data) {
//             res.json({ state: "sucsess" });
//         })
// });


app.get("/", function (req, res) {
    console.log('user entered /')
    // res.render("harid");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data });
        }
    });
});

// app.get('/author', (req , res) => {
//     res.render("reja",{user: user})
// }) 

module.exports = app;
// module.exports = db;



