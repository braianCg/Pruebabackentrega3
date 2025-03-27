const productManager = require('../dao/productManager');

exports.getProducts = async (req, res, next) => {
    try {
        const { limit, page, sort, query: queryParam } = req.query;

        const queryOptions = {};

        if (queryParam) {
            try {
                const parsedQuery = JSON.parse(queryParam);
                Object.assign(queryOptions, parsedQuery);
            } catch (e) {
                queryOptions.title = { $regex: queryParam, $options: 'i' };
            }
        }

        const baseUrl = `${req.protocol}://${req.get('host')}/api/products`;

        const products = await productManager.getProducts({
            limit: parseInt(limit),
            page: parseInt(page),
            sort,
            query: queryOptions,
            baseUrl,
        });

        return res.json(products);
    } catch (error) {
        next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        const product = await productManager.getProductById(req.params.id);
        res.json({ status: 'success', payload: product });
    } catch (error) {
        next(error);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const newProduct = await productManager.createProduct(req.body);
        res.status(201).json({ status: 'success', payload: newProduct });
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const updatedProduct = await productManager.updateProduct(req.params.id, req.body);
        res.json({ status: 'success', payload: updatedProduct });
    } catch (error) {
        next(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        const deletedProduct = await productManager.deleteProduct(req.params.id);
        res.json({ status: 'success', payload: deletedProduct });
    } catch (error) {
        next(error);
    }
};