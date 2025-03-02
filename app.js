import express from "express";
import products from "./Data.js";
import chalk from 'chalk';


const app = express();
const PORT = 5000;

app.use(express.json())

app.get("/", (req, res) => {
  // "/" - endpoint
  res.send("Welcome to home");
});

app.get("/profile", (req, res) => {
  res.send("Welcome to profile");
});

// showing all products data

app.get("/products", (req, res) => {
  res.send(products);
});

// using dynamic routing - useParams
// showing single product data

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);

  const filterData = products.filter((e, i) => {
    return e.id == id;
  });
  res.send(filterData);
});

// using dynamic routing - useSearchParams, we will use query here and showing all products dat a

// app.get("/products", (req, res) => {
//   const { id } = req.query;

//   if (id) {
//     const filterData = products.filter((e, i) => {
//       return e.id == id;
//     });
//     res.send(filterData);
//   } else {
//     res.send(products);
//   }
// }); 

// User EndPoints

app.get('/getUser',(req,res)=>{
    res.json({
        msg:"GET USER API...."
    })
})

app.post('/createUser',(req,res)=>{
    console.log(req.body);
    
    res.json({
        msg:"CREATE USER API...."
    })
})

app.put('/updateUser',(req,res)=>{
    res.json({
        msg:"UPDATE USER API...."
    })
})

app.delete('/deleteUser',(req,res)=>{
    res.json({
        msg:"DELETE USER API...."
    })
})

//  create server using expressjs
app.listen(PORT, () => {
  console.log(chalk.whiteBright.bgGreen.bold(`server is running on ${PORT}`));
});
