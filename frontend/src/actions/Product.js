import { ADD_PRODUCT, REMOVE_PRODUCT } from './types'

const { all, get, add, remove } = require('../API/ProductApi')

function getProductsFromApi() {
    return async function(dispatch) {
        const products = await all()

        products.forEach(product => {
            dispatch(addProduct(product))
        })
    }
}

function addProduct(product) {
    return { 
        type: ADD_PRODUCT, 
        productId: product.id, 
        product: {
            name: product.name,
            description: product.description,
            price: product.price,
            currency: product.currency
        }  
    }
}

function removeProduct(id) {
    return {
        type: REMOVE_PRODUCT,
        productId: id
    }
}

export { getProductsFromApi, addProduct, removeProduct }