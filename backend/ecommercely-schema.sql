CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    user_id INT,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    created_at TIMESTAMP,
    email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
    phone TEXT CHECK(phone 
        ~ '^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$')
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
    phone TEXT CHECK(phone 
        ~ '^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$'),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(100),
    price NUMERIC(10, 2),
    currency VARCHAR(3)
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    url VARCHAR(100) NOT NULL,
    product_id int
);

CREATE TABLE shipping_addresses (
    id SERIAL PRIMARY KEY,
    shipping_address TEXT NOT NULL,
    address_type TEXT NOT NULL,
    customer_id int
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id int,
    created_at TIMESTAMP,
    delivered_status text DEFAULT 'notDelivered',
    address_id int
);

CREATE TABLE order_line_items (
    id SERIAL PRIMARY KEY,
    order_id int,
    product_id int,
    quantity int,
    created_at TIMESTAMP
);