const { NotFoundError, BadRequestError, UnauthorizedError } = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config.js");
const { sqlForPartialUpdate } = require('../helpers/sql')

class Product {
    static async all(){
        const results = await db.query(`
        SELECT * FROM products`)

        const products = results.rows[0]

        return products
    }

    static async allNames(){
        const results = await db.query(`SELECT name FROM products`)

        const productNames = results.rows[0]

        return productNames
    }

    static async allDescriptions(){
        const results = await db.query(`SELECT description FROM products`)

        const productDescriptions = results.rows[0]

        return productDescriptions
    }

    static async allPrices(){
        const results = await db.query(`SELECT price FROM products`)

        const productPrice = results.rows[0]

        return productPrice
    }

    static async allCurrency(){
        const results = await db.query(`SELECT currency FROM products`)

        const productCurrency = results.rows[0]

        return productCurrency
    }

    static async add({
        name,
        description,
        price,
        currency
    }) {
        const result = await db.query(`
        INSERT INTO products 
        (
            name,
            description,
            price,
            currency
        )
        VALUES ($1, $2, $3, $4)
        RETURNING
            id,
            name,
            description,
            price,
            currency
        `,
        [
            name,
            description,
            price,
            currency
        ])

        const product = result.rows[0]

        return product
    }

    static async update(id, data){
        const productCheck = await db.query(`SELECT * FROM products WHERE id = $1`, [id])

        if(!productCheck){
            throw new NotFoundError(`Unknown Product Id`)
        }

        const { setCols, values } = sqlForPartialUpdate(
            data,
            {});

        const idVarIdx = "$" + (values.length + 1);

        const querySql = 
        `
            UPDATE products 
            SET ${setCols} 
            WHERE id = ${idVarIdx} 
            RETURNING
                id,
                name, 
                description,
                price,
                currency
        `;
        const result = await db.query(querySql, [...values, id]);

        const product = result.rows[0]

        return product
    }

    static async get(id){
        const result = await db.query(`SELECT * FROM products WHERE id = $1`, [id])

        if(!result){
            throw new NotFoundError('Unknown Product Id ')
        }

        const product = result.rows[0]

        return product
    }

    static async addImage({url, productId}){
        const productCheck = await db.query(`SELECT * FROM products WHERE id = $1`, [productId])

        if(!productCheck){
            throw new NotFoundError('Unknown Product Id ')
        }

        const result = await db.query(`
        INSERT INTO product_images (url, product_id) 
        VALUES ($1, $2) 
        RETURNING 
            id, 
            url, 
            product_id AS "productId"`, [url, productId])

        const product_image = result.rows[0]

        return product_image
    }

    static async updateImage(id, data){
        const imageCheck = await db.query(`SELECT * FROM product_images WHERE id = $1`, [id])

        if(!imageCheck){
            throw new NotFoundError('Image not found')
        }

        const { setCols, values } = sqlForPartialUpdate(
            data,
            {});

        const idVarIdx = "$" + (values.length + 1);

        const querySql = 
        `
            UPDATE product_images 
            SET ${setCols} 
            WHERE id = ${idVarIdx} 
            RETURNING 
                id, 
                url,
                product_id AS "productId"
        `;
        const result = await db.query(querySql, [...values, id]);

        const image = result.rows[0]

        return image
    }

    static async remove(id){
        const result = await db.query(
            `DELETE 
            FROM products 
            WHERE id = $1`, [id])

        const product = result.rows[0]

        if(!product){
            throw new NotFoundError(`Unknown product id: ${id}`)
        }
    }

    static async removeImage(id){
        const result = await db.query(
            `DELETE
            FROM product_images
            WHERE id = $1`, [id]
        )

        const image = result.rows[0]

        if(!image){
            throw new NotFoundError(`Unknown image id: ${id}`)
        }
    }
}

module.exports = Product