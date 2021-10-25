import express, { json } from "express";
import cors from "cors";

// mongoose connection
import connectDB from "./connect.js";
import appModel from "./todo.js";

const port = process.env.PORT || 4000;
const app = express();

// middleware
app.use[cors()];
app.use(json());
app.use(express.static('client/build'));

//Routes//

// Create a ToDo
app.post("/api/v1/todos", async function(req, res){
    try{
        const { newToDo } = req.body;
        await appModel.create(newToDo);
        res.json("ToDo Added");
    }
    catch(error){
        console.log(error.message);
        res.json("ToDo failed to add");
    }
})

// get all ToDos
app.get("/api/v1/todos", async function(req, res){
    try{
        const alltodo = await appModel.find();
        return res.json({ alltodo });
    }
    catch(error){
        console.log(error.message);
    }
})

// get a ToDO
app.get("/api/v1/todos/:_id", async function (req, res){
    try{
        const { _id } = req.params;
        const todo = await appModel.findById(_id);
        if(!todo){
            return res.json({message: "No todo task found"});
        }
        return res.json({ todo });
    }
    catch(error){
        console.log(error.message);
    }
})

// Update a Todo
app.put("/api/v1/todos/:_id", async function(req, res){
    try{
        const { _id } = req.params;
        const { updateToDo } = req.body;
        console.log(updateToDo)
        const updateData = await appModel.findByIdAndUpdate(_id, {$set: updateToDo}, {new: true});
        return res.json({updateData});
    }
    catch(error){
        res.json(error.message);
    }
})

// Delete a Todo
app.delete("/api/v1/todos/:_id", async function(req, res){
    try{
        const { _id } = req.params;
        await appModel.findOneAndDelete({ _id });
        return res.json({message: "user Deleted"});
    }
    catch(error){
        res.json(error.message);
    }
})


app.listen(port, function(){
    connectDB();
    console.log("Server is running at 4000")
});


