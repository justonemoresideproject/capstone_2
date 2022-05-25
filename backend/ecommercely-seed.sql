INSERT INTO customers (userId, first_name, last_name, created_at, email, phone) VALUES (
        null,
        'jim',
        'bo',
        '2022-05-04 15:00:00',
        'jimbo@gmail.com',
        1112223333
), (
        'admin',
        'test',
        '2022-05-04 15:00:00',
        'admin@gmail.com',
        3332221111
);

INSERT INTO users (username, password, first_name, last_name, email, phone, is_admin)
VALUES (
                'test',
                '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
                'jim',
                'bo',
                'jimbo@gmail.com',
                1112223333,
                FALSE
        ),
        (
                'testadmin',
                '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
                'admin',
                'test',
                'admin@gmail.com',
                3332221111,
                TRUE
        );

INSERT INTO products (name, description, price, currency) VALUES ('dog food', 'yummy delicious dog food', 9.99, 'USD');

INSERT INTO product_images (url, product_id) VALUES ('http@gasdf.jpg', 1);

