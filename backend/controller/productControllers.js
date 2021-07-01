const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
    Product.findByIdAndRemove(req.params.id)
    .then(result => {
      if(!result){
        return res.status(404).json({
          message: "Product not found with id " + req.params.id
        });
      }
      res.status(200).json({
          message: "Product removed successfully"
      });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

const getProductByName = async (req, res) => {
    const productName = new RegExp(req.params.name, 'i');
    Product.find({name:productName})
    .then((result) => {
      res.status(200).json({
        message: "Find successfully",
        result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
    })
};

const FillterProduct = async (req, res) => {
  const match = {}

    if(req.query.kind){
        match.kind = req.query.kind === 'shoe'
    }
    try {
        await req.Product.populate({
            path:'posts',
            match,
            options:{
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip)
            }
        }).execPopulate()
        res.send(req.Product.FillterProduct)
    } catch (error) {
        res.status(500).send()
    }
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  getProductByName,
  FillterProduct,
};