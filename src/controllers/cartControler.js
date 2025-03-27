const cartManager = require('../dao/cartManager');
const mongoose = require('mongoose');


exports.createCart = async (req, res, next) => {
    try {
        const cart = await cartManager.createCart();
        res.status(201).json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.getCartById = async (req, res, next) => {
    try {
        const cart = await cartManager.getCartById(req.params.cid);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};



exports.addProductToCart = async (req, res, next) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
        const cart = await cartManager.addProductToCart(cid, pid, quantity);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.updateCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const { products } = req.body;

        const cart = await cartManager.updateCart(cid, products);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.updateProductQuantity = async (req, res, next) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;

        if (!quantity || isNaN(quantity) || quantity < 1) {
            return res.status(400).json({
                status: 'error',
                message: 'La cantidad debe ser un número mayor a 0'
            });
        }

        const cart = await cartManager.updateProductQuantity(cid, pid, quantity);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.removeProductFromCart = async (req, res, next) => {
    try {
        const { cid, pid } = req.params;
        const cart = await cartManager.removeProductFromCart(cid, pid);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.clearCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        const cart = await cartManager.clearCart(cid);
        res.json({ status: 'success', payload: cart });
    } catch (error) {
        next(error);
    }
};

exports.deleteCart = async (req, res, next) => {
    try {
        const { cid } = req.params;
        await cartManager.deleteCart(cid);
        res.json({ status: 'success', message: 'Carrito eliminado correctamente' });
    } catch (error) {
        next(error);
    }
};