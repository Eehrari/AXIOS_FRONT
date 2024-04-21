import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});
// app.get("/form/:action", async (req, res) => {

//   const action = req.params.action; // Get the action from the URL path
//    if (action === "get") {
//    try {
//     const response = await axios.get("https://axios-server-12w.onrender.com/random");
//     const result = response.data;
//      res.render("getTaskForm.ejs", { taskData: result });
//   } catch (error) {
//     console.error("Failed to make request:", error.message);
//     res.render("index.ejs", {
//       error: error.message,
//     });
//   }
// }
// else{

//   res.render("createTaskForm.ejs");

// }
// });

// app.post("/createtask", async (req, res) => {
//   try {
//     // Extract task data from the request body
//     const newTask = req.body;
//      // Send the task data to the other server
//     const response = await axios.post('https://axios-server-12w.onrender.com/createtask', newTask);

//     // If the task creation was successful on the other server, send a success response
//     if (response.status === 200) {
//       res.render("index.ejs");

//     } else {
//       // If there was an error on the other server, send an error response
//       throw new Error("Failed to create task on the other server");
//     }
//   } catch (error) {
//     console.error("Failed to create task:", error.message);
//     res.status(500).send("Failed to create task");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
