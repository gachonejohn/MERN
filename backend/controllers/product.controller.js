import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {

    try{
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products});
    }catch (error){
        console.error("Error when getting products:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createProduct = async  (req, res) => {
    const product = req.body; // data from the user

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false, message: "please provide all fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    }catch (error){
        console.error("Error when creating product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid product id"});
    }

    try{
        await Product.findByIdAndUpdate(id, product, {new: true});
    }catch (error){
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }   
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid product id"});
    }
    
    try{
        await product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }catch (error){
        console.log("Error deleting product", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}