const express = require('express');
const router = express.Router();
const productManager = require('../dao/productManager');
const cartManager = require('../dao/cartManager');

router.get('/products', async (req, res, next) => {
    try {
        const { limit, page, sort, query } = req.query;

        const queryOptions = {};
        if (query) {
            try {
                const parsedQuery = JSON.parse(query);
                Object.assign(queryOptions, parsedQuery);
            } catch (e) {
                queryOptions.title = { $regex: query, $options: 'i' };
            }
        }

        const baseUrl = `${req.protocol}://${req.get('host')}/products`;

        const result = await productManager.getProducts({
            limit: parseInt(limit),
            page: parseInt(page),
            sort,
            query: queryOptions,
            baseUrl
        });

        res.render('products', {
            products: result.payload,
            pagination: {
                page: result.page,
                totalPages: result.totalPages,
                hasPrevPage: result.hasPrevPage,
                hasNextPage: result.hasNextPage,
                prevLink: result.prevLink,
                nextLink: result.nextLink
            },
            user: {
                name: 'Usuario de prueba',
                role: 'user'
            }
        });
    } catch (error) {
        next(error);
    }
});

router.get('/products/:pid', async (req, res, next) => {
    try {
        const product = await productManager.getProductById(req.params.pid);
        res.render('productDetail', { product });
    } catch (error) {
        next(error);
    }
});

router.get('/carts/:cid', async (req, res, next) => {
    try {
        const cart = await cartManager.getCartById(req.params.cid);
        res.render('cart', { cart });
    } catch (error) {
        next(error);
    }
});

router.get('/', (req, res) => {
    res.redirect('/products');
});

module.exports = router;