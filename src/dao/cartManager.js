const Cart = require('./models/cartModel');
const mongoose = require('mongoose');

class CartManager {
    async createCart() {
        try {
            const cart = await Cart.create({ products: [] });
            return cart;
        } catch (error) {
            throw new Error(`Error al crear el carrito: ${error.message}`);
        }
    }

    async getCartById(id) {
        try {
            const cart = await Cart.findById(id)
                .populate('products.product')
                .lean();

            if (!cart) {
                throw new Error('Carrito no encontrado');
            }

            return cart;
        } catch (error) {
            throw new Error(`Error al obtener el carrito: ${error.message}`);
        }
    }

    async addProductToCart(cartId, productId, quantity) {
        const cart = await Cart.findById(cartId);
        if (!cart) {
            throw new Error('Carrito no encontrado');
        }

        try {

            const productIndex = cart.products.findIndex(
                item => item.product.toString() === productId
            );

            if (productIndex !== -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ product: productId, quantity });
            }

            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al agregar producto al carrito: ${error.message}`);
        }
    }

    async updateProductQuantity(cartId, productId, quantity) {
        if (!mongoose.Types.ObjectId.isValid(cartId)) {
            throw new Error('ID de carrito no válido');
        }
    
        const cart = await Cart.findById(cartId);
        if (!cart) {
            throw new Error('Carrito no encontrado');
        }

        console.log('ID del carrito:', cid);
console.log('ID del producto:', pid);


        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                throw new Error('Carrito no encontrado');
            }

            const productIndex = cart.products.findIndex(
                item => item.product.toString() === productId
            );

            if (productIndex === -1) {
                throw new Error('Producto no encontrado en el carrito');
            }

            cart.products[productIndex].quantity = quantity;

            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al actualizar cantidad de producto: ${error.message}`);
        }
    }

    async removeProductFromCart(cartId, productId) {
        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                throw new Error('Carrito no encontrado');
            }

            cart.products = cart.products.filter(
                item => item.product.toString() !== productId
            );

            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al eliminar producto del carrito: ${error.message}`);
        }
    }

    async updateCart(cartId, products) {
        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                throw new Error('Carrito no encontrado');
            }

            cart.products = products;

            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al actualizar carrito: ${error.message}`);
        }
    }

    async clearCart(cartId) {
        try {
            const cart = await Cart.findById(cartId);

            if (!cart) {
                throw new Error('Carrito no encontrado');
            }

            cart.products = [];

            await cart.save();
            return cart;
        } catch (error) {
            throw new Error(`Error al vaciar el carrito: ${error.message}`);
        }
    }

    async deleteCart(cartId) {
        try {


            console.log('Buscando carrito con ID:', cartId);
            const cart = await Cart.findById(cartId);
            if (!cart) {
                console.log('Carrito no encontrado');
                throw new Error('Carrito no encontrado');
            }

            const deletedCart = await Cart.findByIdAndDelete(cartId);

            if (!deletedCart) {
                throw new Error('Carrito no encontrado');
            }

            return deletedCart;
        } catch (error) {
            throw new Error(`Error al eliminar el carrito: ${error.message}`);
        }
    }
}

module.exports = new CartManager();