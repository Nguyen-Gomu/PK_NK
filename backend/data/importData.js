require("dotenv").config();
const fs = require("fs");
const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const posts = JSON.parse(fs.readFileSync(`${__dirname}/data.json`,"utf-8"));

const importData = async () => {
    try{
        await Product.create(posts);
        console.log("Data Successfully imported ");
        process.exit(1);
    }catch(error){
        console.log(`ERROR :${error}`);
        process.exit(1);
    }
}

const deleteData = async () => {
    try{
        await Product.deleteMany({});
        console.log("Data Successfully deleted ");
        process.exit();
    }catch (error) {
        console.log(`ERROR: ${error}`);
        process.exit(1);
    }
}

if(process.avgv[2] === "--import") {
    importData();
} else if(process.argv[2] === "--delete"){
    deleteData();
}