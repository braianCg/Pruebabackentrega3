const Product = require('./models/productModel');

class ProductManager {
    async getProducts(options = {}) {
        const {
            limit = 10,
            page = 1,
            sort,
            query = {},
            baseUrl = '/api/products'
        } = options;

        const sortOptions = sort ? { price: sort === 'asc' ? 1 : -1 } : {};

        try {
            const result = await Product.paginate(query, {
                limit,
                page,
                sort: sortOptions,
                lean: true
            });

            const response = {
                status: 'success',
                payload: result.docs,
                totalPages: result.totalPages,
                prevPage: result.prevPage,
                nextPage: result.nextPage,
                page: result.page,
                hasPrevPage: result.hasPrevPage,
                hasNextPage: result.hasNextPage,
                prevLink: result.hasPrevPage ? `${baseUrl}?limit=${limit}&page=${result.prevPage}${sort ? `&sort=${sort}` : ''}${query ? `&query=${JSON.stringify(query)}` : ''}` : null,
                nextLink: result.hasNextPage ? `${baseUrl}?limit=${limit}&page=${result.nextPage}${sort ? `&sort=${sort}` : ''}${query ? `&query=${JSON.stringify(query)}` : ''}` : null
            };

            return response;
        } catch (error) {
            throw new Error(`Error al obtener los productos: ${error.message}`);
        }
    }

    async getProductById(id) {
        try {
            const product = await Product.findById(id).lean();
            if (!product) {
                throw new Error('Producto no encontrado');
            }
            return product;
        } catch (error) {
            throw new Error(`Error al obtener el producto: ${error.message}`);
        }
    }

    async createProduct(productData) {
        try {
            const product = await Product.create(productData);
            return product;
        } catch (error) {
            throw new Error(`Error al crear el producto: ${error.message}`);
        }
    }

    async updateProduct(id, productData) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                productData,
                { new: true, runValidators: true }
            );

            if (!updatedProduct) {
                throw new Error('Producto no encontrado');
            }

            return updatedProduct;
        } catch (error) {
            throw new Error(`Error al actualizar el producto: ${error.message}`);
        }
    }

    async deleteProduct(id) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(id);

            if (!deletedProduct) {
                throw new Error('Producto no encontrado');
            }

            return deletedProduct;
        } catch (error) {
            throw new Error(`Error al eliminar el producto: ${error.message}`);
        }
    }
}

module.exports = new ProductManager();