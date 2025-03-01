import express from "express";
// import postRoute from "./routes/post.route.js"

const router= express.Router();

// Define your routes here


router.get('/', (req, res) => {
    res.send('Hello from Post Route!');
});

// router.listen(8800,()=>{
//     console.log("server is running!");
// });
export default router;