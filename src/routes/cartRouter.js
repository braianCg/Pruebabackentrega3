const express = require('express');  
const router = express.Router();  
const cartController = require('../controllers/cartControler.js');  

router.post('/', cartController.createCart);  

router.get('/:cid', cartController.getCartById);  
router.post('/:cid/products/:pid', cartController.addProductToCart); 
router.put('/:cid', cartController.updateCart);  
router.put('/:cid/products/:pid', cartController.updateProductQuantity);  
router.delete('/:cid/products/:pid', cartController.removeProductFromCart);  
router.delete('/:cid', cartController.deleteCart);  

module.exports = router;